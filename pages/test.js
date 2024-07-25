import Image from "next/image";
import ElementX from "../public/element-x.png";
export default function Test() {
return (
<div className="item-centre flex blur-md">
<Image 
  src={ElementX}
  alt="x"
  height={150}
  width={150}
</div>
/>
 );
}