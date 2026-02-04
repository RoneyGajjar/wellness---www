"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Meet() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
    <div className="mx-auto max-w-4xl text-center" id="meetnow">
          <h2 className="text-base/7 font-semibold text-indigo-600">Book Now</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl ">Let&#039;s Talk About Your Health</p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 mb-20">Book a short call to discuss what you&#039;re struggling with and what a personalised homeopathic plan might look like for you.</p>
        </div>
    <Cal
      
      namespace="15min"
      calLink="roney-gajjar-qbehlx/15min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{"layout":"month_view"}}
    />
    </>

  );
}







