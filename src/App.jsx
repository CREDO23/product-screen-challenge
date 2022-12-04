import Product from "./screens/Product";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function () {
  return (
    <div className="w-[100vw] h-[100vh]  font-Poppins overflow-auto no-scrollbar">
      <Navbar />
      <Product />
      <Footer />
    </div>
  );
}
