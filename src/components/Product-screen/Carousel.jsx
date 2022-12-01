import { useState } from "react";
import ImageCard from "./ImageCard";
import minis from '../../assets/Mini'

const imagesUrls = import.meta.glob("../../assets/Mini/*");

const urls = Promise.all(
  Object.values(imagesUrls).map(
    async (url) => await url().then((res) => res.default)
  )
);

const paths = await urls;

export default function () {

    console.log(minis)

  return <div>
    <div className="h-10 w-10">
        

    </div>
    <div>

    </div>
  </div>;
}
