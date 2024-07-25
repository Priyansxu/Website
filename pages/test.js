import Image from "next/image";
import ElementX from "../public/element-x.png";
export default function Test() {
return (
<div className="relative flex justify-center items-center mt-10">
  <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
  <Image 
    src={ElementX}
    alt="x"
    height={150}
    width={150}
    className="relative z-10"
  />
</div>
 );
}