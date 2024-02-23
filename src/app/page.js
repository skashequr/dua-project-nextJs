
import Categories from "./Components/categories";
import Duya from "./Components/duya";
import Settings from "./Components/settings";
import SideBar from "./Components/sidebar";

export default function Home() {
  return (
    <main className="m-5 p-0">
      <div className="grid lg:grid-cols-12 lg:gap-3 md:gap-2 sm:gap-1">
      <div className="lg:col-span-1">
      <SideBar></SideBar>
      </div>
      <div className="h-28 lg:col-span-3 md:col-span-4 grid-cols-6">
      <Categories></Categories>
      </div>
      <div className=" h-28 col-span-6">
        <Duya></Duya>
      </div>
      <div className=" col-span-2">
        <Settings></Settings>
      </div>
      </div>
    </main>
  );
}
