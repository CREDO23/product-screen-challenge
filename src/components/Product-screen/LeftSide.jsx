export default function () {
  const favorites = [
    {
      name: "Snacker",
      selected : true
    },
    {
      name: "Backpacks",
    },
    {
      name: "Totes",
    },
    {
      name: "Crossbodies",
    },
    {
      name: "Backet bags",
    },
    {
      name: "Sachels",
    },
    {
      name: "Jackets",
    },
    {
      name: "Sleep",
    },
  ];

  return (
    <div className=" md:flex order-last md:order-first flex-col md:divide-x gap-4 items-start">
      <p className="font-medium">All Favorites</p>
      <ul className="text-sm md:pl-3 flex md:flex-col flex-wrap items-start gap-2 font-light">
        {favorites.map((el, index) => (
          <a href="" className="hover:underline">
            <li key={index} className={`${el.selected ? 'text-blue-700 ' : ''}`}>{el.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
