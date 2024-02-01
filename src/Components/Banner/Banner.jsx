import { Link } from "react-router-dom";
import { FaArrowDown } from 'react-icons/fa';
import {motion} from 'framer-motion';
import img from "../../assets/bannerBg.png";
const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${img})`}} className="pt-[50px] flex flex-col lg:flex-row-reverse justify-end bg-fixed bg-opacity-40 items-end hero min-h-screen p-8 gap-4 text-center">
            <motion.div animate={{ y: -50, scale:1}} initial={{scale: 0}}    className="flex-1">
                <h1 className="text-5xl lg:text-8xl font-bold uppercase text-center lg:text-end text-black">Quotes that spark inspiration</h1>
            </motion.div>
            <div className="flex-1">
                
               <div className="flex justify-end">
               <Link className="lg:text-end "><motion.button  animate={{ y: -50, scale:1}} initial={{scale: 0}} transition={{delay: 1}}  className=" text-center mx-auto p-6 text-xl w-[150px] h-[150px] rounded-xl text-white shadow-xl bg-[#FFA447] hover:bg-[#F28585]   font-semibold uppercase">Explore <FaArrowDown className="text-center mx-auto my-4"></FaArrowDown></motion.button></Link>
               </div>
            </div>
        </div>
    );
};

export default Banner;