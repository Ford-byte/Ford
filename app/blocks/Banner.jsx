const MyComponent = () => {
  return (
    <div className="centralize items-center h-screen">
      <div className="flex flex-col items-center gap-y-8 z-10">
        <span className="text-gray-500 tracking-widest text-xs sm:text-lg">
          Hi, I’m Clifford, an aspiring Web Developer.
        </span>
        <span className="flex text-center text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold typing-animation">
          ExpressJs and VueJs/NextJs
          <p className="text-blue-500 inline px-2">Developer</p>
        </span>
        <div className="flex gap-x-2 sm:gap-x-8 font-semibold tracking-wider text-sm">
          <span>
            <a href="/123.png" download>
              <button className="px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white shadow-xl hover:shadow-none">
                Download CV
              </button>
            </a>
          </span>
          <span>
            <a href="#footer">
              <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-xl hover:shadow-none">
                Contact Me
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
