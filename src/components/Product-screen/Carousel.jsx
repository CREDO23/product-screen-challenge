import { useEffect, useRef, useState, memo } from "react";
import ImageCard from "./ImageCard";

const miniImagesUrls = import.meta.glob("../../assets/Minis/*");
const imagesUrls = import.meta.glob("../../assets/Images/*");

const miniUrls = Promise.all(
  Object.values(miniImagesUrls).map(
    async (url) => await url().then((res) => res.default)
  )
);

const urls = Promise.all(
  Object.values(imagesUrls).map(
    async (url) => await url().then((res) => res.default)
  )
);

const miniPaths = await miniUrls;

const paths = await urls;

export default memo(function () {
  const carousel = useRef();

  let carouselLength = 1;

  const [interval, setinterval] = useState();

  const [selected, setSelected] = useState(0);

  const handleScrollAuto = () => {
    return setInterval(() => {
      carousel.current?.scrollTo({
        behavior: "smooth",
        top: (carousel.current.scrollHeight / paths.length) * carouselLength,
      });

      carouselLength++;

      if (carouselLength == paths.length) {
        carouselLength = 1;
      }
    }, 2000);
  };

  const handleScroll = (index) => {
    clearInterval(interval);
    setSelected(index + 1);
    carousel.current?.scrollTo({
      behavior: "smooth",
      top: (carousel.current.scrollHeight / paths.length) * index,
    });
    setTimeout(() => {
      setinterval(handleScrollAuto());
      setSelected(0);
    }, 10000);
  };

  useEffect(() => {
    setinterval(handleScrollAuto());
  }, []);

  return (
    <div className="md:w-1/3 w-full max-h-[32rem] flex ">
      <div className="w-10 md:flex hidden  flex-col gap-3">
        {miniPaths.map((path, index) => (
          <img
            onClick={() => handleScroll(index)}
            key={index}
            src={path}
            className={`h-8 cursor-pointer ${
              selected == index + 1 ? "border" : ""
            } w-8 p-1 rounded-full`}
            alt="jordan"
          />
        ))}
      </div>

      <ul
        ref={carousel}
        className=" overflow-auto no-scrollbar bg-white w-full h-64 md:h-full  flex flex-col md:gap-3"
      >
        {paths.map((path) => (
          <li
            onMouseOver={() => {
              clearInterval(interval);
            }}
            onMouseLeave={() => {
              setinterval(handleScrollAuto());
            }}
            className="w-full h-full"
          >
            <ImageCard image={path} />
          </li>
        ))}
      </ul>
    </div>
  );
});
