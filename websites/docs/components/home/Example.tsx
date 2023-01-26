import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const examples = [
  {
    title: "Podcast",
    video: "/examples/podcasts.webm",
  },
  {
    title: "Year in review",
    video: "/examples/yir.webm",
  },
  {
    title: "Mockups",
    video: "/examples/mockups.webm",
  },
  {
    title: "Tweets",
    video: "/examples/tweets.webm",
  },
  {
    title: "Subtitles",
    video: "/examples/subtitles.webm",
  },
];

export const Examples = () => {
  const [mouseIn, setMouseIn] = useState(false);
  const [current, setCurrent] = useState(0);
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    vidRef.current.currentTime = 0;
    vidRef.current.play();
    const interval = setInterval(() => {
      if (mouseIn) {
        return;
      }
      const nextCurrent = (current + 1) % examples.length;
      setCurrent(nextCurrent);
    }, 10000);
    return () => clearInterval(interval);
  }, [current, mouseIn]);

  return (
    <div className="space-y-6 max-w-screen-xl m-auto text-center md:text-left">
      <div className="max-w-xl leading-[1.2] space-y-6">
        <h2 className="text-4xl md:text-[50px] font-semibold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-tl to-purple-400 from-pink-600">
          Video templates for every purpose
        </h2>
        <p className="text-lg md:text-xl  leading-[1.4]">
          Start with a flexible template, then customize to fit your style and
          professional needs with our website builder.
        </p>
      </div>
      <div className="items-center h-full justify-between hidden md:flex">
        <div className="flex-col items-start text-[40px] font-semibold leading-none flex">
          {examples.map(({ title }, i) => (
            <div
              key={i}
              className="relative cursor-pointer group py-3"
              onMouseEnter={() => {
                setMouseIn(true);
                setCurrent(i);
              }}
              onMouseOut={() => {
                console.log("out");
                setMouseIn(false);
              }}
            >
              <div className="flex items-end space-x-3 ">
                <p
                  className={`${
                    current === i ? "opacity-100" : "opacity-30"
                  } duration-300`}
                >
                  {title}
                </p>
                <IoIosArrowForward
                  className={`text-3xl leading-none mb-1 duration-500  ${
                    current === i
                      ? "translate-x-0 opacity-100"
                      : "opacity-0 -translate-x-2"
                  }`}
                />
              </div>
              <div
                className={`absolute left-0 bottom-1 bg-base-content h-[3px] duration-[400ms] delay-150 ${
                  current === i ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="relative h-[400px] aspect-video">
          {examples.map(({ video }, i) => (
            <video
              key={i}
              ref={current === i ? vidRef : null}
              src={video}
              className={`absolute top-0 h-full ease-out rounded-xl  ${
                current === i
                  ? "opacity-100 translate-x-0 z-20 duration-700"
                  : "opacity-0 -translate-x-10 z-0"
              }`}
              autoPlay
              preload="auto"
              muted
              loop
            />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <div className="relative">
          <video
            className="w-full aspect-video"
            src={examples[current].video}
            autoPlay
            muted
            loop
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-between items-center text-2xl">
            <div
              className={`p-2 bg-base-content text-base-100 cursor-pointer rounded-full ${
                current === 0 ? "opacity-0" : "opacity-40"
              }`}
            >
              <IoIosArrowBack
                onClick={() => {
                  if (current !== 0) setCurrent(current - 1);
                }}
              />
            </div>
            <div
              className={`p-2 bg-base-content text-base-100 cursor-pointer rounded-full ${
                current === examples.length - 1 ? "opacity-0" : "opacity-40"
              }`}
            >
              <IoIosArrowForward
                onClick={() => {
                  if (current !== examples.length - 1) setCurrent(current + 1);
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-4 justify-center mt-6">
          {examples.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 bg-base-content rounded-full duration-500 ${
                current === i ? " scale-125" : "opacity-30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
