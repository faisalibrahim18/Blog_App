
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

export default function latepost() {

  // memanggil data api 
  // console.log(process.env.baseURL)
  // getPost(2).then(res => console.log(res))

  return (
    <div className="bg-white text-black ">
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-vold text-4xl py-12 text-center font-bold">
          Latest Post
        </h1>

        {/* grid columns*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
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
    <div className="items">
      <div className="images">
        <Link href={"/posts/page"}>
          <a>
            <Image src={"/img/ft1.jpg"} className="rounded-3xl" width={330} height={270} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
      <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-400">- Oct 17, 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-3xl md:text6xl font-bold text-gray-800 hover:text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
