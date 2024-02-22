
import Categories from "./Components/categories";
import SideBar from "./Components/sidebar";

export default function Home() {
  return (
    <main className="m-5 p-0">
      <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1">
      <SideBar></SideBar>
      </div>
      <div className="h-28 col-span-3">
      <Categories></Categories>
      </div>
      <div className="bg-black h-28 col-span-6">

      </div>
      <div className="bg-black h-28 col-span-2">

      </div>
      </div>
    </main>
  );
}
