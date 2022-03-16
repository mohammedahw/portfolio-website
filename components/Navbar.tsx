import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  return (
    <>
      <nav className="px-2 py-3 dark:text-white font-bold font-sans">
        <div className="flex flex-row container justify-around">
          <div className="">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="">
            <ul className="container flex flex-row list-none ml-auto justify-center align-middle items-center">
              <li className="mx-4">
                <Link href={"/"}>Projects</Link>
              </li>
              <li className="mx-4">
                <Link href={"/"}>Blog</Link>
              </li>
              <li className="mx-4">
                <Link href={"/"}>About</Link>
              </li>
              <li className="mx-4">{mounted && renderThemeChanger()}</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
