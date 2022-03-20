import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineCrown, AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="w-5 h-5 hover:cursor-pointer"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoon
          className="w-5 h-5 hover:cursor-pointer"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const renderMenuIcons = () => {
    if (navOpen) {
      return <AiOutlineCloseCircle className="h-6 w-6 md:h-8 md:w-8" />;
    } else {
      return <FiMenu className="h-6 w-6 md:w-8 md:h-8" />;
    }
  };

  return (
    <>
      <nav className="py-8 dark:text-white flex justify-center items-center">
        <div className="flex flex-row container justify-around">
          <Link href={"/"}>
            <div className="flex md:justify-center md:items-center">
              <AiOutlineCrown className="mt-[1px] mr-2 hover:cursor-pointer h-8 w-7 md:mt-0 md:w-8 md:h-9 pb-1" />
              <div className="font-bold hover:cursor-pointer text-xl">
                Mohammed Ali
              </div>
            </div>
          </Link>
          <div className="">
            <div
              className="md:hidden hover:cursor-pointer flex justify-center items-center container"
              onClick={() => setNavOpen(!navOpen)}
            >
              {renderMenuIcons()}
            </div>
            <div
              className={`md:flex flex-grow items-center ${
                navOpen ? "flex" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row list-none">
                <li className="mx-4">
                  <Link href={"/#projects"}>Projects</Link>
                </li>
                <li className="mx-4">
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="mx-4">
                  <Link href={"/#footer"}>Contact Info</Link>
                </li>
                <li className="mx-4 pt-1">{mounted && renderThemeChanger()}</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
