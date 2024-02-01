import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:max-w-screen-xl mx-auto bg-transparent bg-fixed bg-opacity-40 p-6 z-20">
       <div className="flex flex-col lg:flex-row justify-between items-center">
       <div className="logo">
        <Link><h2 className="text-3xl text-black">Spark<span className="font-bold text-lime-400">lit</span></h2></Link>
       </div>
       
       <div className="">
        <ul className="flex space-x-4">
        <li className="border-2 rounded-[50%] p-4 hover:border-lime-400 shadow-lg"><Link>All</Link></li>
        <li className="border-2 rounded-full p-4 hover:border-lime-400 shadow-lg"><Link>Famous</Link></li>
        <li className="border-2 rounded-full p-4 hover:border-lime-400 shadow-lg"><Link>SignIn/Register</Link></li>
        </ul>
       </div>
       </div>

    </div>
  );
};

export default Navbar;