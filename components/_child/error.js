import Image from "next/image";

export default function error(){
    return(
        <div className="text-center py-10 bg-white">
            <h1 className="text-3xl font-bold text-orange-600 py-10">Something Went Worng</h1>
            <Image src={"/img/not.jpg"} width={550} height={400}></Image>
            
        </div>
    )
}