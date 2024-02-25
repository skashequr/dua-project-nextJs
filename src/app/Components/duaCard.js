import React, { useContext, useState } from "react";
import Image from "next/image";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { BsExclamationOctagon } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AuthContext } from "@/authprovidert/AuthProvider";
import { CgPlayStopO } from "react-icons/cg";
const DuaCard = ({ props }) => {
  const Swal = require('sweetalert2')
  const click =e=>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Coppy Done :)",
      showConfirmButton: false,
      timer: 1500
    });
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl , setAudioUrl] = useState("");
  // const  = 'http://www.ihadis.com/duaaudiofinal/2.mp3';
  console.log(audioUrl);
  let audio;

  const playSound = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.addEventListener('canplaythrough', () => {
        audio.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error('Error playing audio:', error);
            // Handle error (e.g., display a message to the user)
          });
      });
      audio.addEventListener('error', (error) => {
        console.error('Error loading audio:', error);
        // Handle error (e.g., display a message to the user)
      });
    }
  };
  
  const stopSound = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };
  
  const {catID} = useContext(AuthContext);
  console.log(catID);
  console.log(props);
  return (
    <div className="relative w-full p-5 overflow-hidden mt-3 bg-white rounded-xl" id={props.subcat_id}>
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
          <p className="text-[#1FA45B]  text-xl">
            {props.id}. {props?.dua_name_en}
          </p>
        </div>
      </div>
      <p className="p-3">{props?.top_en}</p>
      <p className="p-3 mb-4 font-semibold text-2xl leading-[61px] text-right">
        {props?.dua_arabic}
      </p>
      {props?.transliteration_en && (
        <p className="p-3">
          <span className="font-bold">Transliteration: </span>{" "}
          {props?.transliteration_en}
        </p>
      )}
      {props?.translation_en && (
        <p className="p-3">
          <span className="font-bold">Translation: </span>{" "}
          {props?.translation_en}
        </p>
      )}
      {props?.refference && (
        <span className="text-[#1FA45B] px-3">Reference:</span>
      )}
      <span className="font-bold px-3">{props?.refference}</span>

      <div className="px-3 mt-2 flex items-center justify-between">
        <div onClick={() => { setAudioUrl(props?.audio); setIsPlaying(!isPlaying)}} >
          {   props?.audio && (isPlaying?<CgPlayStopO onClick={stopSound} className="h-8 w-8"/> : <MdOutlinePlayCircleFilled onClick={playSound}  className="h-8 w-8"/> )  //<MdOutlinePlayCircleFilled onClick={stopSound} className="h-8 w-8" />
          }
        </div>
        <div className="flex justify-center items-center gap-7">
          <div onClick={click}>
            <CopyToClipboard text={props?.transliteration_en}>
            <IoCopyOutline className="h-8 w-8" />
            </CopyToClipboard>
          </div>
          <div>
            <FaRegLightbulb className="h-8 w-8" />
          </div>
          <div>
            <CiShare2 className="h-8 w-8" />
          </div>
          <div>
            <BsExclamationOctagon className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;