import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="text-center  flex-row justify-between px-20 py-10 sm:flex-cols md:flex-col lg:flex-row xl:flex md:py-5 ">
      
        <div>
          <p className="text-2xl font-neue">&copy; Ebue-<span className="text-red-600">Dev</span> 2022</p>
          <span>Contact me</span>
        </div>
        <div className="">
          <p className="font-neue text-2xl">SOCIAL LINKS</p>
          <span className="mr-3 text-sm"><Facebook/> </span>
          <span className="mr-3 text-sm"><Twitter /></span>
          <span className="mr-3 text-sm"><LinkedIn/></span>
        </div>
        <div>
          <p className="font-neue text-2xl">ADDRESS</p>
          <span>No. 9 Zaria bye pass, Jos, Plateau</span>
        </div>
      </div>
   
  );
};

export default Footer;
