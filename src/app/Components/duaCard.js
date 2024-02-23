import Image from "next/image";
import React from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { BsExclamationOctagon } from "react-icons/bs";
const DuaCard = ({ props }) => {
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
          <p>1. The servant is dependent on his Lord #1</p>
        </div>
      </div>
      <p className="p-3">
      Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.
      </p>
      <p className="p-3 mb-4 font-semibold text-2xl leading-[61px]">
      لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
      </p>
      <p className="p-3">
      <span className="font-bold">Transliteration: </span>Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu
      </p>
      <p className="p-3">
      <span className="font-bold">Transliteration: </span> There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.
      </p>
      <p className="text-[#1FA45B] px-3">Reference:</p>
      <p className="font-bold px-3">Bukhari: 844</p>

      <div className="px-3 mt-2 flex items-center justify-between">
        <div>
        <MdOutlinePlayCircleFilled className="h-8 w-8"/>
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
