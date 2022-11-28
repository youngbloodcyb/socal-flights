import Image from "next/image";
import "css.gg/icons/css/bell.css";
import SoCalLogo from "../public/socal.png";

export default function Nav() {
  return (
    <nav className="font-sans md:px-10 px-4 py-4 ">
      <div className="h-20 flex flex-row items-center text- dark:bg-slate-400 p-4 rounded-xl drop-shadow-lg transition-all hover:shadow-slate-400">
        <div className="w-1/2" id="home-button-container">
          {/* <h1 className="ml-10">SoCal*Flights</h1> */}
          <a href="/">
            <Image src={SoCalLogo} width="150" alt="SoCal Flights Logo" />
          </a>
        </div>
        <div id="link-container" className=" w-1/2 flex justify-end">
          <ul className="flex flex-row md:gap-8 px-4 text-md">
            <li>
              <a href="/">Flights</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">
                <i className="gg-bell"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
