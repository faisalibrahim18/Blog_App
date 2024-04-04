import Image from "next/image";
import Link from "next/link";
import fl from "../public/img/fl.png";
import ui from "../public/img/ui.png";
import prog from "../public/img/prog.png";
import Author from "./_child/author";

export default function section4() {
  return (
    <div className="bg-white text-black">
      <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Business</h1>
            <div className="flex flex-col gap-6">
                {/* Post */}
                {Post()}
                {Post()}
                {Post()}
            </div>
          </div>
          <div className="item">
            <h1 className="font-bold text-4xl py-12">
              Travel
            </h1>
            <div className="flex flex-col gap-6">
                {/* Post */}
                {Post()}
                {Post()}
                {Post()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image src={prog} className="rounded-3xl" width={200} height={170} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              This is my laptop
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-400">
              - Oktober 3, 2022
            </a>
          </Link>
        </div>
        <div className="title pr-5">
          <Link href={"/"}>
            <a className="text-xl  font-bold text-gray-800 hover:text-gray-600 ">
              Lorem Ipsum is simply dummy text of the printing.
            </a>
          </Link>
        </div>
        <Author></Author>
      </div>
    </div>
  );
}
