
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Tesla",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Amazon",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Facebook ",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Microsoft",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Harry Potter",
    profile: "https://links.papareact.com/d0c",
    src: "https://links.papareact.com/d0c",
  },
];


function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(({ name, src, profile }) => (
        <StoryCard key={src} name={name} src={src} profile={profile} />
      ))}
    </div>  
  );
}

export default Stories;