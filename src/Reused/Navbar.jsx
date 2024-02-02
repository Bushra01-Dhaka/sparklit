import { Link } from "react-router-dom";

const Navbar = () => {
  const NavItem = <>
    <li className="border-0 shadow-[#FFA447] hover:border-2 hoer:bg[#FFA447] rounded-full mr-2 shadow-xl text-black"><Link>All Quotes</Link></li>
    <li className="border-0 shadow-[#FFA447] hover:border-2 hoer:bg[#FFA447] rounded-full mr-2 shadow-xl text-black"><Link>Popular</Link></li>
    <li className="border-0 shadow-[#FFA447] hover:border-2 hoer:bg[#FFA447] rounded-full mr-2 shadow-xl text-black"><Link>Signin/Register</Link></li>
  </>
  return (
    <div className="navbar fixed z-20 md:max-w-screen-xl mx-auto p-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-screen h-screen pt-4">
      <div className="text-center mx-auto space-y-4 text-white">
    <li className="text-center bg-[#FFA447] rounded-full p-2"><Link>All Quotes</Link></li>
    <li className="bg-[#FFA447] rounded-full p-2"><Link>Popular</Link></li>
    <li className="bg-[#FFA447] rounded-full p-2"><Link>Signin/Register</Link></li>
  </div>
      </ul>
    </div>
    {/* logo */}
    <Link><h2 className="text-3xl text-black hover:shadow-xl hover:rounded-full hover:shadow-[#FFA447]">Spark<span className="text-[#FFA447] font-bold ">lit</span></h2></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 border-0">
      {NavItem}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
  );
};

export default Navbar;