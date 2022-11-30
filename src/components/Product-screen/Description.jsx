import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEye,
  faCheck,
  faBoltLightning,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import jordRed from "../../assets/jordRedMini.png";
import jordBlack from "../../assets/jordBlackMini.png";

export default function () {
  return (
    <div className="w-1/4 p-5  text-gray-800 flex flex-col gap-8 items-start justify-evenly ">
      <div className=" flex flex-col gap-y-2">
        <p className=" font-semibold text-2xl">
          Cadance Leather Sneakers from women
        </p>

        <div className=" flex items-center gap-2">
          <span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </span>
          <span className="text-sm text-gray-400">(14 Reviews)</span>
        </div>
      </div>

      <div className=" flex flex-col gap-y-2">
        <div className="w-full flex gap-2 items-center ">
          <p className=" font-medium">Manufacturer Profile</p>
          <span className="text-sm text-gray-500 underline">
            (What's this ?)
          </span>
        </div>

        <div className="text-xs flex flex-col items-start gap-1 font-light">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faEye} />
            <p>Same manufacturer as church's & Kenzo</p>
          </div>
          <div className="flex gap-3  items-center">
            <FontAwesomeIcon icon={faStar} />
            <p>Avg Review : 4.4/5</p>
          </div>
          <div className="flex gap-3  items-center">
            <FontAwesomeIcon icon={faCheck} />
            <p>Certifications : BSCI & SMECTA</p>
          </div>
        </div>

        <div className="flex mt-4 items-center justify-between">
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

      <div className=" flex flex-col gap-y-5">
        <div className="w-full flex gap-2 flex-wrap">
          <img
            className="w-8 border-gray-700 border rounded-full h-8 bg-gray-300"
            src={jordBlack}
            alt="jordan"
          />

          <img
            className="w-8 rounded-full h-8 bg-orange-400"
            src={jordRed}
            alt="jordan"
          />
        </div>

        <div className="flex flex-wrap gap-1">
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            10
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            20
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            30
          </div>
          <div className="h-8 w-8 border-gray-700 border-2 flex items-center justify-center text-sm font-light">
            40
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            50
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            60
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            70
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            80
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            90
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            100
          </div>
          <div className="h-8 w-8 flex items-center justify-center text-sm font-light border">
            110
          </div>
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

        <div className="flex flex-col items-center text-sm divide-y-2">
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
