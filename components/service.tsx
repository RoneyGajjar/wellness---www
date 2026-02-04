const pricing = () => {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8" >
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"></div>
      </div>
      <div className="mx-auto max-w-4xl text-center" id="price">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Choose the right plan for you</p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Transparent, simple fees for personalised homeopathic care in Auckland. No hidden costs—just honest support on your healing journey.</p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        <div className="rounded-3xl rounded-t-3xl bg-gray-50 p-8 ring-1 ring-gray-200 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
          <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Follow‑Up Consultation</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-gray-900">$70</span>
            <span className="text-base text-gray-600">/Hour</span>
          </p>
          <p className="mt-6 text-base/7 text-gray-600">Ongoing support to review changes, adjust remedies, and gently guide your body towards stable, long‑term improvement.</p>
          <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Check‑in on your progress and symptoms
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Remedy adjustment or new prescription if needed
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Space to discuss new concerns or life changes
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Recommended every 4–6 weeks at the start
            </li>
          </ul>
          <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-10">Get started today</a>
        </div>
        <div className="relative rounded-3xl bg-gray-50 p-8 ring-1 ring-white/10 sm:p-10">
          <h3 id="tier-enterprise" className="text-base/7 font-semibold text-indigo-600">First Homeopathic Consultation</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-gray-900">$120</span>
            <span className="text-base text-gray-400">/hour</span>
          </p>
          <p className="mt-6 text-base/7 text-gray-600">A complete, in‑depth session to understand your health story, main concerns, and goals so we can choose a remedy that truly fits you.</p>
          <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Detailed case‑taking: body, mind, lifestyle, and stress
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Personalised homeopathic remedy plan
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Guidance on what to expect and how to take your remedies
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Suitable for adults, children, and babies
            </li>
            <li className="flex gap-x-3">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              In‑person in Auckland or secure online video
            </li>
          </ul>
          <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</a>
        </div>
      </div>
    </div>

  )
}

export default pricing;

