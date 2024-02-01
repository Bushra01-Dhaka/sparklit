import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:max-w-screen-xl mx-auto bg-transparent fixed p-6 z-20 ">
       <div className="flex lg:flex-row justify-between items-center gap-4">
       <div className="logo">
        <Link><h2 className="text-3xl text-black">Spark<span className="font-bold text-[#FFA447]">lit</span></h2></Link>
       </div>
       
       <div className="">
        <ul className="flex space-x-4">
        <li className="border-2 rounded-[50%] p-4 hover:border-[#FFA447] shadow-lg"><Link>All</Link></li>
        <li className="border-2 rounded-full p-4 hover:border-[#FFA447] shadow-lg"><Link>Famous</Link></li>
        <li className="border-2 rounded-full p-4 hover:border-[#FFA447] shadow-lg"><Link>SignIn/Register</Link></li>
        </ul>
       </div>
       </div>

    </div>
  );
};

export default Navbar;