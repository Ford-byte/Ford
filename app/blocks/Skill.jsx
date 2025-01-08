import skill from "@/static/skill.json";
import Image from "next/image";

export default () => {
  return (
    <div className="relative py-12">
      <div className="centralize">
        <div className="container flex flex-col gap-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-4">
            {skill &&
              skill.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex h-[400px] bg-gray-100 flex-col items-center border border-gray-400 shadow-lg ${
                      index === skill.length - 1
                        ? (skill.length - 1) % 2 === 0
                          ? "col-span-2"
                          : "col-span-1"
                        : ""
                    }`}
                  >
                    <div className="pt-4 text-3xl font-semibold">
                      {item.skill}
                    </div>
                    <div className="grid grid-cols-2 w-full h-full">
                      <span className="centralize text-5xl px-6 font-semibold flex items-center h-full">
                        <Image
                          src={item.image}
                          alt={item.image}
                          className="mt-4 w-full h-[300px] py-4 px-2 rounded-lg object-contain"
                          width={500}
                          height={500}
                          loading="lazy"
                        />
                      </span>
                      <span className="centralize text-5xl font-semibold flex items-center h-full">
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
