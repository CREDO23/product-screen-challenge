import Navbar from "../components/Navbar";
import Description from "../components/Product-screen/Description";
import Carousel from "../components/Product-screen/Carousel";

export default function () {
  return (
    <div className="w-full flex flex-col no-scrollbar items-center h-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full gap-3 flex h-full">
        <Carousel/>
          <Description/>
        </div>
    </div>
  );
}
