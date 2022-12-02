import Navbar from "../components/Navbar";
import Description from "../components/Product-screen/Description";
import Carousel from "../components/Product-screen/Carousel";
import LeftSide from "../components/Product-screen/LeftSide";

export default function () {
  return (
    <div className="w-full flex flex-col no-scrollbar items-center h-full">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full my-5 gap-6 justify-center flex h-full">
        <LeftSide />
        <Carousel />
        <Description />
      </div>
    </div>
  );
}
