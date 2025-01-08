"use client";
import { useEffect, useState, useRef } from "react";
import experience from "@/static/experience.json";
import Image from "next/image";

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
    <div className="relative">
      <div className="centralize">
        <div className="container flex flex-col gap-y-6">
          <span
            ref={ref}
            className={`text-5xl text-center sm:text-left font-bold border-b-2 ${
              isVisible ? "visible" : "invisible"
            }`}
          >
            Experience
          </span>

          {experience &&
            experience?.map((item, index) => (
              <div
                key={index}
                className={`pb-12 grid grid-cols-1 sm:grid-cols-2 ${
                  index === experience.length - 1
                    ? ""
                    : "border-b-2 border-black"
                }`}
              >
                <div className="flex flex-col px-4">
                  <h3 className="text-3xl font-semibold">
                    {item.projectTitle}
                  </h3>
                  <p className="text-xs sm:text-lg text-justify py-2 tracking-wider">
                    {item.projectDescription}
                  </p>
                </div>
                {item.projectImages && (
                  <Image
                    src={`${item.projectImages}`}
                    alt={item.projectTitle}
                    className="mt-4 w-full h-[300px] rounded-lg shadow-lg"
                    width={1000}
                    height={1000}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
