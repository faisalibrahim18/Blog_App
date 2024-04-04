import Image from "next/image";
import ft from "../public/img/ft1.jpg";
import Link from "next/link";
import Author from "./_child/author";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function section1() {
  const bg = {
    background: "url('img/3.png') no-repeat right white",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16 bg-white text-black" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-black text-4xl pb-12 text-center">
          Trending
        </h1>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="swiper-container"
        >
          <SwiperSlide>{Slide()}</SwiperSlide>

          <br />
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2 text-black">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image
              className="rounded-3xl"
              src={"/img/ad.png"}
              width={400}
              height={300}
            />
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
