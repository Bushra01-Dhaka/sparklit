import { FaHeart, FaSearch } from "react-icons/fa";
import img from "../../assets/Features/features.png"
import { MdAddBox, MdMail, MdNotifications } from "react-icons/md";
import {motion} from 'framer-motion';

const Features = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
            <div className="flex-1">
                <img className="h-[80%] w-[80%] mx-auto" src={img} alt="" />
            </div>
            <div className="flex-1 space-y-8 p-16 lg:p-0">
                <h1 className="text-4xl lg:text-5xl border-l-8 pl-1 border-[#FFA447] uppercase font-bold mb-6">Features</h1>
                <motion.div animate={{ x: 30, scale:1}} initial={{scale: 0}} transition={{delay: 1}}  className="flex gap-4 text-2xl lg:text-3xl">
                    <FaSearch className="text-[#FFA447]"></FaSearch>
                    <p className="">Filter Amazing Quotes</p>
                </motion.div>
                <motion.div animate={{ x: -50, scale:1}} initial={{scale: 0}} transition={{delay: 1}}  className="flex gap-4 text-2xl lg:text-3xl">
                    <FaHeart className="text-[#F28585]"></FaHeart>
                    <p className="">Save Your Fav Quotes</p>
                </motion.div>
                <motion.div animate={{ x: 30, scale:1}} initial={{scale: 0}}transition={{delay: 1}}  className="flex gap-4 text-2xl lg:text-3xl">
                    <MdMail className="text-[#B7E5B4]"></MdMail>
                    <p className="">Daily/Weekly email subscriptions</p>
                </motion.div>
                <motion.div animate={{ x: -50, scale:1}} initial={{scale: 0}}transition={{delay: 1}}  className="flex gap-4 text-2xl lg:text-3xl">
                    <MdNotifications className="text-[#FFA447]"></MdNotifications>
                    <p className="">Day starts with beautiful quotes</p>
                </motion.div>
                <motion.div animate={{ x: 30, scale:1}} initial={{scale: 0}}transition={{delay: 1}}  className="flex gap-4 text-2xl lg:text-3xl">
                    <MdAddBox className="text-[#F28585]"></MdAddBox>
                    <p className="">Publish Your Quotes</p>
                </motion.div>
                
                
                
            </div>
        </div>
    );
};

export default Features;