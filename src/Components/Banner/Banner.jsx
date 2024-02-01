import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse justify-end items-end min-h-[80vh] p-8">
            <div className="flex-1">
                <h1 className="text-5xl lg:text-8xl font-bold uppercase text-center lg:text-end">Quotes that spark inspiration</h1>
            </div>
            <div className="flex-1">
                {/* <p className="lg:text-lg py-4 lg:py-0 md:text-center lg:text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nam ad est libero molestias laborum id nobis rerum, fugit culpa dicta in sint earum magnam cupiditate ipsum exercitationem cumque aperiam.</p> */}
                <Link className="text-center"><button className=" text-center mx-auto p-6 hover:border-2 hover:bg-black hover:border-lime-400 hover:text-lime-400 w-[120px] h-[120px] rounded-[120px] text-black shadow-xl bg-lime-400 font-medium">Explore Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;