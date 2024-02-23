import Image from "next/image";
import { IoLanguage } from "react-icons/io5";
import { BiBookmarks } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { SwitchComponent } from "./toaagale";

const Settings = () => {
  return (
    <div>
      <div class="flex-row flex justify-end mb-4">
        <div class="flex-shrink-0">
          <Image
            src="https://i.ibb.co/VxpDfJt/image-removebg-preview-3-removebg-preview.png"
            width={55}
            height={55}
            alt="Picture of the author"
          ></Image>
        </div>
        <div class=" flex flex-col"></div>
      </div>
      <div className="w-64 p-2 m-auto h-[550px] bg-white rounded-2xl">
        <p className="text-center p-5 font-bold text-base">Settings</p>
        <div className="flex flex-col gap-4">
          <div class=" rounded-2xl bg-[#F7F8FA] dark:bg-gray-800 p-4 ">
            <div class="flex-row gap-4 flex justify-center items-center ">
              <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                <IoLanguage className=" w-6 h-6" />
              </div>
              <div class=" flex flex-col">
                <span class="text-lg font-sans text-gray-600 dark:text-white">
                  Language Settings
                </span>
              </div>
            </div>
          </div>
          <div class=" rounded-2xl bg-[#F7F8FA] dark:bg-gray-800 p-4 ">
            <div class="flex-row gap-4 flex justify-center items-center ">
              <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                <BiBookmarks className=" w-6 h-6" />
              </div>
              <div class=" flex flex-col">
                <span class="text-lg font-sans text-gray-600 dark:text-white">
                  Language Settings
                </span>
              </div>
            </div>
          </div>
          <div class=" rounded-2xl bg-[#F7F8FA] dark:bg-gray-800 p-4 ">
            <div class="flex-row gap-4 flex justify-center items-center ">
              <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                <RxDashboard className=" w-6 h-6" />
              </div>
              <div class=" flex flex-col">
                <span class="text-lg font-sans text-gray-600 dark:text-white">
                  Font Settings
                </span>
              </div>
            </div>
          </div>
          <div class=" rounded-2xl bg-[#F7F8FA] dark:bg-gray-800 p-4 ">
            <div class="flex-row gap-4 flex justify-center items-center ">
              <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                <RxDashboard className=" w-6 h-6" />
              </div>
              <div class=" flex flex-col">
                <span class="text-sm font-sans text-gray-600 dark:text-white">
                  Appearance Settings
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6 border border-gray-700 rounded-md items-center">
          <div>
            <p>Night Mode</p>
          </div>
          <div>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
