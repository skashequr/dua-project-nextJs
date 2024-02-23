import Image from "next/image";
import React from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { BsExclamationOctagon } from "react-icons/bs";
const DuaCard = ({ props }) => {
    console.log(props);
  return (
    <div class="relative w-full p-5 overflow-hidden mt-3 bg-white rounded-xl" >
      <div className="flex items-center">
        <div>
          <Image
            alt="allah"
            src="https://i.ibb.co/LtV4Qrw/image.png"
            height={40}
            width={40}
          />
        </div>
        <div>
          {/* {props?.id} .  */}
          <p className="text-[#1FA45B]  text-xl">{props.id}. {props?.dua_name_en}</p>
        </div>
      </div>
      <p className="p-3">
        {
            props?.top_en
        }
      </p>
      <p className="p-3 mb-4 font-semibold text-2xl leading-[61px] text-right">
        {
            props?.dua_arabic
        }
      </p>
      {props?.transliteration_en?<p className="p-3">
      <span className="font-bold">Transliteration: </span> {props?.transliteration_en}
      </p> : ""}
      {props?.translation_en?<p className="p-3">
      <span className="font-bold">Transliteration: </span>  {props?.translation_en} 
      </p> : ""}
      {props?.refference && <span className="text-[#1FA45B] px-3">Reference:</span>}
      <span className="font-bold px-3">{props?.refference}</span>

      <div className="px-3 mt-2 flex items-center justify-between">
        <div>
        {props?.audio &&<MdOutlinePlayCircleFilled className="h-8 w-8"/>}
        </div>
        <div className="flex justify-center items-center gap-7">
        <div>
            <IoCopyOutline className="h-8 w-8"></IoCopyOutline>
        </div>
        <div>
            <FaRegLightbulb className="h-8 w-8"></FaRegLightbulb>
        </div>
        <div>
            <CiShare2 className="h-8 w-8"></CiShare2>
        </div>
        <div>
            <BsExclamationOctagon className="h-8 w-8"></BsExclamationOctagon>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
