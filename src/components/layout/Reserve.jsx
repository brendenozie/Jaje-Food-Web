"use client";
export default function Reserve() {

  return (
    <section id="contact" className="py-24 lg:py-36 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-3/12">
                <div className="md:max-w-[40rem] absolute z-10 p-40 rounded-full bg-repeat-round bg-italian-pattern">
                  <div className="flex items-center justify-center mb-8 w-20 h-20 rounded-xl" style={{ background: "#000000", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2077 3.19551C13.9184 0.268161 18.0816 0.268162 18.7923 3.19552C19.2514 5.08655 21.4179 5.98396 23.0797 4.97142C25.6522 3.40398 28.596 6.34784 27.0286 8.92031C26.016 10.5821 26.9135 12.7486 28.8045 13.2077C31.7318 13.9184 31.7318 18.0816 28.8045 18.7923C26.9135 19.2514 26.016 21.4179 27.0286 23.0797C28.596 25.6522 25.6522 28.596 23.0797 27.0286C21.4179 26.016 19.2514 26.9135 18.7923 28.8045C18.0816 31.7318 13.9184 31.7318 13.2077 28.8045C12.7486 26.9135 10.5821 26.016 8.92031 27.0286C6.34784 28.596 3.40398 25.6522 4.97142 23.0797C5.98396 21.4179 5.08655 19.2514 3.19552 18.7923C0.268162 18.0816 0.268161 13.9184 3.19551 13.2077C5.08655 12.7486 5.98396 10.5821 4.97142 8.92031C3.40398 6.34784 6.34784 3.40398 8.92031 4.97141C10.5821 5.98396 12.7486 5.08655 13.2077 3.19551Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <h3 className="mb-6 text-sm font-semibold" style={{ letterSpacing: "-0.5px" }}>&ldquo;At Jajemelo well help you plan your trip effectively&amp; productively. Ensuring that you have a seamless holiday even as you travel with us touring all the places of interest !&rdquo;</h3>
                  <h4 className="font-semibold tracking-tight mb-1">Jajemelo</h4>
                  <span>Founder, Jajemelo.</span>
                </div>
              </div>
              <div className="w-full md:w-8/12 z-20 relative rounded-l-full pl-72 pt-24 bg-repeat-round pr-16 bg-fresh-pattern">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="fname" type="text" placeholder="First Name" />
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="lname" type="text" placeholder="Last Name" />
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="email" type="text" placeholder="Email Address" />
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="phone" type="text" placeholder="Phone Number" />
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="company" type="text" placeholder="Company (Optional)" />
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      <textarea className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="message"  placeholder="Leave a message..."></textarea>
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <button className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-red-500 hover:bg-red-600 rounded-lg focus:ring-4 focus:ring-red-300 transition duration-200"  >Send Enquiry</button>
                    <span className="text-sm text-gray-200 tracking-tight">* We never share user details with third parties, period.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
