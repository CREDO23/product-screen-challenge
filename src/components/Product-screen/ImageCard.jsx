

export default function ({ smallDescription, image }) {
  return (
    <>
      <div className=" bg-slate-50  flex flex-col items-center justify-center  md:h-96 p-3">
        <img src={image} className="" alt="jordan" />
      </div>
      <div>
        <h4 className="font-medium">The Perfect Leather Snaker</h4>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          alias quam officiis mollitia totam a sed, quas ad nulla quidem culpa?
          Illo, nihil hic? Maxime quaerat velit ipsam itaque doloremque.
        </p>
      </div>
    </>
  );
}
