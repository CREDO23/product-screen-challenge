import logo from "../assets/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

export default function () {
  const [hambourger, setHambourger] = useState(false);

  return (
    <>
      <div className="flex p-3 w-full justify-between py-1 mb-2 md:hidden items-center">
        <a href="#">
          <img src={logo} className="h-6 mr-3 md:block sm:h-10" alt="logo" />
        </a>
        <FontAwesomeIcon
          onClick={() => {
            setHambourger(prev => !prev);
          }}
          className="text-sky-900"
          size="2x"
          icon={faBars}
        />
      </div>
      <nav className={`p-3  ${hambourger ? 'block' : 'hidden'}   md:block border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}>
        <div className="container  flex flex-wrap items-center justify-between mx-auto">
          <Menu />
        </div>
      </nav>
    </>
  );
}
