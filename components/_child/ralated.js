import Image from "next/image";
import Link from "next/link";
import prog from "../../public/img/prog.png";
import Author from "./author";


export default function Ralated() {
  return (
    <div className="bg-white text-black">
      <section className="pt-20">
        <h1 className="font-bold text-4xl py-10">Related</h1>

        <div className="flex flex-col gap-10">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
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
            <Image
              src={prog}
              className="rounded-3xl"
              width={180}
              height={130}
            />
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
            <a className="text-lg  font-bold text-gray-800 hover:text-gray-600 ">
              Lorem Ipsum is simply dummy text of the printing.
            </a>
          </Link>
        </div>
        <Author></Author>
      </div>
    </div>
  );
}
