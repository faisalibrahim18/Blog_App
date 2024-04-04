
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fl from "../public/img/fl.png";
import ui from "../public/img/ui.png";
import prog from "../public/img/prog.png";

export default function populer() {
  return (
    <div className="bg-white text-black">
      <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-vold text-4xl py-12 text-center font-bold">
            Most Populer
        </h1>

        {/* swiper */}
        <Swiper
         modules={[Autoplay, Pagination]}
         pagination={{clickable: true}}
          slidesPerView={2}
          loop={true}
        autoplay={{ 
            delay:2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
         }}
         >
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <br/>
        </Swiper>
      </section>
    </div>
  );
}
function Post() {
    return (
      <div className="grid">
        <div className="images pl-2 ">
          <Link href={"/"}>
            <a>
              <Image className="rounded-3xl" src={ui} width={500} height={400} />
            </a>
          </Link>
        </div>
        <div className="info flex justify-center flex-col pl-2">
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
          <div className="title pl-1">
            <Link href={"/"}>
              <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 ">
                Lorem Ipsum is simply dummy text of the printing.
              </a>
            </Link>
          </div>
          <p className="text-gray-500 py-3">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer galley type.
            . 
          </p>
          <Author></Author>
        </div>
      </div>
    );
  }
  