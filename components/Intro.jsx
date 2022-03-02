import Image from "next/image"
import Link from "next/link"

const Intro = () => {
  return (
    <div className="text-center bg-white pb-10  ">
        
        <h1 className="text-xl sm:text-4xl  text-gray-700 uppercase   font-bold text-red mt-40 sm:mt-20 lg:mt-48">Welcome to Ebue-<span className="text-red-600">Movie</span> App</h1>
        <p className="text-gray-500">Get All The Latest Movies Here...</p>
        
        <Link href="/contact" passHref>
        <button  className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4 hover:bg-transparent hover:text-gray-700 hover:border-2 hover:font-bold ">CONTACT US</button>
        </Link>
        
    </div>
  ) 
}

export default Intro