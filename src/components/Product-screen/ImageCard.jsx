export default function ({ smallDescription, image }) {
  return (
    <>
      <div className="md:border rounded-md flex flex-col items-center justify-center  h-2/3 md:h-96 p-3">
        <img
          className="hover:scale-150 transition-all"
          src={image}
          alt="jordan"
        />
      </div>
      <div className="hidden md:block">
        <h4 className="font-medium">The Perfect Leather Snaker</h4>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          alias quam officiis mollitia totam a sed, quas ad nulla quidem culpa?
        </p>
      </div>
    </>
  );
}
