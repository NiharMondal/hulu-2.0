import request from "../utils/request";
import { useRouter } from "next/router";
export default function Nav() {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-14 text-2xl  whitespace-nowrap space-x-10 sm:space-x-16 overflow-x-auto scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            className="last:pr-8 cursor-pointer transition duration-100 hover:text-white active:text-blue-400 transform hover:scale-125"
            key={key}
            onClick={()=>router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
    </nav>
  );
}
