import Image from "next/image"
import aut from "../../public/img/author/aut.png"
import Link from "next/link"

export default function author() {
  return (
    <div className="author flex py-5">
        <Image src={aut} width={40} height={40} className="rounded-full"></Image>
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600">Faisal Muhammad Ibrahim</a></Link>
            <span className="text-sm text-gray-500">CEO and Founder</span>
        </div>
    </div>
  )
}
