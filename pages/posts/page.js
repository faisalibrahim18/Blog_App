import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import ft from "../../public/img/ft1.jpg";
import Ralated from "../../components/_child/ralated";

export default function Page() {
  return (
    <div className="bg-white text-black">
      <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
          <div className="flex justify-center">
            <Author></Author>
          </div>
          <div className="post py-10">
            <h1 className="font-bold text-4xl text-center text-black pb-5">
              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt.
            </h1>
            <p className="text-gray-500 text-xl text-center">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className="py-10">
              <Image src={ft} width={900} height={600}></Image>
            </div>
            <div className="content text-gray-600 text-xl flex flex-col gap-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <Ralated></Ralated>
        </section>
      </Format>
    </div>
  );
}
