'use client'; // For App Router

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  concern: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Have Questions? Let&apos;s Chat About Your Wellness
        </h2>
        <p className="text-xl text-white mb-8">
          Drop a quick message—I&apos;ll reply personally with tailored homeopathy advice for your Auckland lifestyle.
        </p>
        <p className="text-sm text-white">100% Confidential • Response within 24 hours</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            id="name"
            type="text"
            className={`w-full px-4 py-3 border rounded-xl text-lg transition duration-200 ${
              errors.name
                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            id="email"
            type="email"
            className={`w-full px-4 py-3 border rounded-xl text-lg transition duration-200 ${
              errors.email
                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone (Optional)</label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition duration-200 text-lg"
            placeholder="+64 21 123 456"
          />
        </div>

        {/* Concern */}
        <div>
          <label htmlFor="concern" className="block text-sm font-semibold text-gray-700 mb-2">Main Health Concern</label>
          <select
            {...register('concern')}
            id="concern"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition duration-200 text-lg bg-white"
          >
            <option value="">Select or describe below...</option>
            <option value="anxiety">Anxiety/Stress</option>
            <option value="skin">Skin Issues (Eczema, Scabies)</option>
            <option value="digestive">Digestive Health</option>
            <option value="allergies">Allergies</option>
            <option value="insomnia">Insomnia/Sleep</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell Me More</label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition duration-200 text-lg resize-vertical"
            placeholder="E.g., 'Struggling with anxiety during stressful times in Auckland—need natural relief.'"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 disabled:bg-emerald-400 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 transition duration-200 shadow-lg flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span>{isSubmitting ? 'Sending...' : 'Send Message & Get Advice'}</span>
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-8 p-6 bg-emerald-100 border border-emerald-400 text-emerald-800 rounded-xl text-center max-w-lg mx-auto">
          Thanks! I&apos;ve got your details and will be in touch soon. Feel better already? 😊
        </div>
      )}
      {status === 'error' && (
        <div className="mt-8 p-6 bg-red-100 border border-red-400 text-red-800 rounded-xl text-center max-w-lg mx-auto">
          Oops! Something went wrong. Try again or email me directly.
        </div>
      )}

      <p className="text-center text-sm text-gray-500 mt-8">
        Your details are secure • No spam • Unsubscribe anytime
      </p>
    </section>
  );
}
