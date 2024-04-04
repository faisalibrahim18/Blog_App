import Head from "next/head";
import Image from "next/image";
import Format from "../layout/format";


//components
import Section1 from "../components/section1";
import Latepost from "../components/latepost";
import Populer from "../components/populer";
import Section4 from "../components/section4";

export default function Home() {
  return (
    <Format>
      <Section1></Section1>
      <Latepost></Latepost>
      <Populer></Populer>
      <Section4></Section4>
    </Format>
  );
}
