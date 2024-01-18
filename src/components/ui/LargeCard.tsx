// import { ICity } from "@/types/typings";
import { addDays } from "date-fns";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

const loaderProp =({ src  } :any) => {
  return src;
}

type Props = {
  img: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
};

const LargeCard = ({ }) => {

  return (
    <section className="relative">
      {/* bg image */}
      <div className="relative h-[35rem] min-w=[300px]">
        <Image className="object-cover object-left " src={"/477.png"} alt={"title"} fill />
      </div>
      {/* text */}
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{"title"}</h3>
        <h2>{"description"}</h2>

        <button onClick={null} className="text-sm text-white rounded-full cursor-pointer bg-amber-400 font-bold px-10 py-2 mt-[1.65rem]
        uppercase
        absolute
        top-80
        left-20
        pt-3
        pb-3">{"order now"}</button>
      </div>
    </section>
  );
};

export default LargeCard;
