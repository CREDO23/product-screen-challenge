
import Description from "../components/Product-screen/Description";
import Carousel from "../components/Product-screen/Carousel";
import LeftSide from "../components/Product-screen/LeftSide";
import jord from '../assets/Images/jord1.png'

export default function () {
  return (
      <div className="w-full my-5 gap-10 flex-wrap overflow-auto no-scrollbar px-3 justify-center flex h-full">
        <LeftSide />
        <Carousel />
        <Description />
      </div>
    
  );
}
