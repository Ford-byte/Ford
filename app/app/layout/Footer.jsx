"use client";
import { useEffect, useState, useRef } from "react";

export default () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="relative py-4" id="footer">
      <div className="centralize">
        <div className="container centralize">
          <div className="w-[700px] bg-gray-200 p-6 flex flex-col gap-y-4">
            <span className="centralize text-3xl font-semibold tracking-widest">
              Contact Me
            </span>
            <div className="flex flex-col gap-y-4">
              <input
                type="text"
                className="w-full py-2 px-2"
                placeholder="Fullname"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  className="w-full py-2 px-2"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="w-full py-2 px-2 remove-spinner"
                  placeholder="Contact Number"
                  pattern="^\d{11}$"
                  minLength={11}
                  maxLength={11}
                  title="Please enter exactly 11 digits."
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="h-[100px] px-2 py-2"
                placeholder="Message "
              ></textarea>
              <input
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold tracking-widest shadow-2xl hover:shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="centralize py-12">
        <div className="container">
          <div className="centralize relative">
            <div className="h-24 w-24 rounded-full bg-black flex justify-center items-center text-white z-10">
              1
            </div>
            <div className="absolute top-1/2 left-0 right-0 border-t-2 border-black bg-black transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full grid grid-cols-2">
        <div className="text-center">@2025 all rights reserved</div>
        <div className="text-center">@2025 all rights reserved</div>
      </div>
    </div>
  );
};
