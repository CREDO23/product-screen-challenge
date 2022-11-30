import Navbar from "../components/Navbar";
import Description from "../components/Product-screen/Description";

export default function () {
  return (
    <div className="w-full flex flex-col items-center h-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full">
          <Description />
        </div>
    </div>
  );
}
