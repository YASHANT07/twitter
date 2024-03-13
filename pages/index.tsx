import { IoLogoXing } from "react-icons/io";
import { RiHomeHeartLine } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { GoBookmark } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { PiMoney } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <RiHomeHeartLine />,
  },
  {
    title: 'Explore',
    icon: <BiHash />,
  },
  {
    title: 'Notification',
    icon: <IoIosNotificationsOutline />,
  },
  {
    title: 'Message',
    icon: <BsEnvelope/>,
  },
  {
    title: 'Bookmarks',
    icon: <GoBookmark />,
  },
  {
    title: 'Blue',
    icon: <PiMoney />,
  },
  {
    title: 'User',
    icon: <LuUser2 />,
  },
  {
    title: 'More options',
    icon: <IoIosMore />,
  }
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-28">
      <div className="col-span-3 pt-8 border ml-28">
        <div className="bg-white text-3xl hover:cursor-pointer hover:bg-gray-500 rounded-full p-1 h-fit transition-all w-fit">
          <IoLogoXing />
        </div>
        <div className="flex justify-start text-xl text-white font-bold mt-8 px-2 py-2 cursor-pointer">
          <ul>
            {sidebarMenuItems.map((item) => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-500 rounded-full p-1 m-2 w-fit h-fit" key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-[#1d9bf0] text-white text-xl rounded-full w-full mt-4 p-4">Tweet</button>
      </div>
      <div className="col-span-6 border-r-2 border-l-2 border-slate-500">
        <FeedCard/>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
