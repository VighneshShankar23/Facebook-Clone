import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Tesla",
    src: "https://links.papareact.com/kxk",
  },
  {
    name: "Amazon",
    src: "https://links.papareact.com/f0p",
  },
  {
    name: "Facebook",
    src: "https://links.papareact.com/snf",
  },
  {
    name: "Microsoft",
    src: "https://links.papareact.com/zvy",
  },
  {
    name: "Harry Potter",
    src: "https://links.papareact.com/d0c",
  },
  {
    name: "007",
    src: "https://links.papareact.com/r57",
  },
];


function Widget() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>

        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map(({ name, src }) => (
        <Contact key={src} name={name} src={src} />
      ))}
    </div>
  );
}

export default Widget;