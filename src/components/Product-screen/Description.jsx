import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEye,
  faCheck,
  faBoltLightning,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ({image}) {
  const [sizes, setZizes] = useState([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,
  ]);

  const handleRating = (starts) => {
    return Array.from(Array(starts), (e, i) => {
      return (
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
      );
    });
  };

  return (
    <div className="md:w-1/4 w-full text-gray-800 order-first md:order-last md:flex flex-col gap-8 items-start justify-evenly ">
       <div className="border md:hidden rounded-md flex flex-col items-center justify-center h-80 p-3">
        <img
          className="hover:scale-150 object-contain transition-all"
          src={image}
          alt="jordan"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <p className=" font-semibold text-2xl">
          Cadance Leather Sneakers from women
        </p>

        <div className=" flex items-center gap-2">
          <span>{handleRating(4)}</span>
          <span className="text-sm text-gray-400">(14 Reviews)</span>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <div className="w-full flex gap-2 items-center ">
          <p className=" font-medium">Manufacturer Profile</p>
          <span className="text-sm text-gray-500 underline">
            (What's this ?)
          </span>
        </div>

        <div className="text-xs flex flex-col items-start gap-1 font-light">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon className="text-gray-400" icon={faEye} />
            <p>Same manufacturer as church's & Kenzo</p>
          </div>
          <div className="flex gap-3  items-center">
            <FontAwesomeIcon className="text-gray-400" icon={faStar} />
            <p>Avg Review : 4.4/5</p>
          </div>
          <div className="flex gap-3  items-center">
            <FontAwesomeIcon className="text-gray-400" icon={faCheck} />
            <p>Certifications : BSCI & SMECTA</p>
          </div>
        </div>

        <div className="flex mt-4 items-center gap-10">
          <div>
            <span>$150</span>
            <p className="underline text-xs text-gray-500">
              Or 3 payements of $50
            </p>
          </div>
          <div>
            <span className="text-xl">$250-345</span>
            <p className=" text-sm text-gray-400">Normal Brand</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5">
        <div className="w-full flex gap-2 flex-wrap">
          <div className="w-8 border-gray-700 border rounded-full h-8 bg-gray-300"></div>

          <div className="w-8 rounded-full h-8 bg-orange-400"></div>
        </div>

        <div className="flex flex-wrap gap-1">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="h-8 w-8 flex items-center justify-center text-sm font-light border"
            >
              {size}
            </div>
          ))}
        </div>

        <div>
          <button
            type="submit"
            className="w-full text-sm font-light py-2 text-white rounded-sm my-1 bg-gray-900 hover:bg-gray-800  focus:bg-gray-700 focus:outline-none"
          >
            Add to bag
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <FontAwesomeIcon className="text-red-600" icon={faBoltLightning} />

          <p className=" text-gray-700">
            <span className="font-bold">Limited Run. </span>
            1000 views this week
          </p>
        </div>

        <div className="flex flex-col items-center text-sm divide-y">
          <div className="w-full flex items-center hover:bg-gray-100 cursor-pointer p-2 justify-between">
            <p>Shipping and Returns</p>
            <FontAwesomeIcon icon={faPlus} />
          </div>

          <div className="w-full flex items-center  hover:bg-gray-100 cursor-pointer p-2 justify-between">
            <p>Details</p>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  );
}
