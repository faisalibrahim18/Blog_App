import Link from "next/link";
import { ImFacebook, ImInstagram, ImYoutube } from "react-icons/im";
import Newslatter from "./_child/newslatter";
export default function footer() {

  const bg = {
    backgroundImage:"url('/Img/ft5.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }
  return (
    <footer className="bg-gray-50 pl-5" style={bg}>
      {/* <Newslatter></Newslatter> */}
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-16">
       
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}><a><ImFacebook color="#888888" /></a></Link>
            <Link href={"/"}><a><ImInstagram color="#888888" /></a></Link>
            <Link href={"/"}><a><ImYoutube color="#888888" /></a></Link>
          </div>
          <p className="py-5 text-gray-400"><b className="text-white">Copyright </b>  ©2022 All rights reserved|This template is mode by FMI</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
