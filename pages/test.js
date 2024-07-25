import Image from "next/image";
import ElementX from "../public/element-x.png";
export default function Test() {
return (
<div className="flex justify-center items-center relative mt-10 blur-lg">
<Image 
  src={ElementX}
  alt="x"
  height={150}
  width={150}
/>
</div>
 );
}