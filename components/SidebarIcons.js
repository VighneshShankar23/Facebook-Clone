import Image from "next/image";

function SidebarIcons({ Icon, title, src }) {
  return (
    <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
      
      {src && (
        <Image src={src} height={30} width={30} className="rounded-full" layout="fixed" />
      )}

      {Icon && <Icon className="h-8 w-8 text-blue-500" />}

      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarIcons;