import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          provident eos dolorum quis maxime laboriosam magnam deleniti nam modi
          quibusdam.
        </p>
        <div className="text-2xl flex justify-between md:w-[75%] my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              />
              <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m17.5 6.51l.01-.011"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4.1-28.8.1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7.1 30.6c0 4.8.1 8.6.1 10c0 4.3-3 9.5-11.5 8c-66-22.1-112.2-84.9-112.2-158.3c0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8m-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7.6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9.4-3.7-.4-3.9-1.7m-9.1 3.2c-2.2.2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7.9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4m-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3m-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3.6c1.3 1.3 1.8 3.3.9 4.1c-.9 1.1-2.8.9-4.3-.6m-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9.6-2.6 0-3.7-1.5m-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5.6c1.1 1.3 1.3 2.8.4 3.5c-.9.9-2.4.4-3.5-.6m-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3.7 1.9 1.8 1.5 2.6c-.4.9-1.7 1.1-2.8.4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            >
              <path d="M44 24a19.94 19.94 0 0 1-5.889 14.173A19.94 19.94 0 0 1 24 44C12.954 44 4 35.046 4 24a19.93 19.93 0 0 1 5.5-13.775A19.94 19.94 0 0 1 24 4a19.94 19.94 0 0 1 14.111 5.827A19.94 19.94 0 0 1 44 24" />
              <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147" />
              <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23s3.48 16.28 4.06 18.835" />
              <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3s11.907-7.76 13.796-9.355M5.5 31.613a20.08 20.08 0 0 0 9 9.991" />
              <path d="M4 24a19.93 19.93 0 0 1 5.5-13.775M24 4a19.94 19.94 0 0 0-14.5 6.225M32 5.664a20 20 0 0 1 6.111 4.163A19.94 19.94 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.94 19.94 0 0 0 14.111-5.827" />
            </g>
          </svg>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legals</h6>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
