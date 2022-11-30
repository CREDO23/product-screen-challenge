import Navbar from "../components/Navbar";
import Description from "../components/Product-screen/Description";
import ImageCard from "../components/Product-screen/ImageCard";

export default function () {
  return (
    <div className="w-full flex flex-col no-scrollbar items-center h-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full">
          <ImageCard/>
        </div>
    </div>
  );
}
