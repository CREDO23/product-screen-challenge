import { useEffect, useRef, useState ,memo } from "react";
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

export default memo( function () {
  const carousel = useRef();

  let carouselLength = 1;

  const [interval,setinterval] = useState()
 

  const handleScroll = () => {
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

  useEffect(() => {
    setinterval(handleScroll())
  }, []);

  return (
    <div className="w-1/3 flex">
      <div className="w-10 flex flex-col gap-3">
        {miniPaths.map((path, index) => (
          <img
            key={index}
            src={path}
            className={`h-8 cursor-pointer w-8 p-1 rounded-full`}
            alt="jordan"
          />
        ))}
      </div>

      <ul
         onMouseOver={() =>{
            clearInterval(interval)
         } } onMouseLeave={() =>{
          setinterval(handleScroll())
         } }
        ref={carousel}
        className=" overflow-auto no-scrollbar bg-white w-full flex flex-col gap-3"
      >
        {paths.map((path) => (
          <li >
            <ImageCard image={path} />
          </li>
        ))}
      </ul>
    </div>
  );
})
