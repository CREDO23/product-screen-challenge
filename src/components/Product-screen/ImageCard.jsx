import jord from "../../assets/jord1.png";

export default function ({smallDescription , image}) {

  return (
    <div className="md:w-1/3 bg-white w-full p-3 flex flex-col gap-3">
      <div className=" bg-slate-50  flex flex-col items-center justify-center  md:h-96 p-3">
        <img src={jord} className="" alt="jordan" />
      </div>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias
        quam officiis mollitia totam a sed, quas ad nulla quidem culpa? Illo,
        nihil hic? Maxime quaerat velit ipsam itaque doloremque.
      </p>
    </div>
  );
}
