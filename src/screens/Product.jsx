import Navbar from "../components/Navbar";
import Description from "../components/Product-screen/Description";
import Carousel from "../components/Product-screen/Carousel";
import LeftSide from "../components/Product-screen/LeftSide";
import jord from '../assets/Images/jord1.png'

export default function () {
  return (
    <div className="w-full flex flex-col no-scrollbar items-center h-full">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full my-5 gap-10 flex-wrap px-3 justify-center flex h-full">
        <LeftSide />
        <Carousel />
        <Description  image={jord}/>
      </div>
    </div>
  );
}
