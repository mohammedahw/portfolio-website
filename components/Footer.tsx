import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="flex justify-center items-center pt-24">
        <div className="pl-4 hover:cursor-pointer">
          <Link href={"https://github.com/mohammedahw"} passHref>
            <a target="_blank">
              <AiFillGithub className="w-8 h-8" />
            </a>
          </Link>
        </div>
        <div className="pl-4">
          <Link href={"https://www.linkedin.com/in/mohammedahw/"} passHref>
            <a target="_blank">
              <AiFillLinkedin className="w-8 h-8" />
            </a>
          </Link>
        </div>
        <div className="pl-4">
          <Link href={"https://www.instagram.com/mohamed.ahw/"} passHref>
            <a target="_blank">
              <AiFillInstagram className="w-8 h-8" />
            </a>
          </Link>
        </div>
        <div className="pl-4">
          <Link
            href={"https://www.facebook.com/profile.php?id=100013895192520"}
            passHref
          >
            <a target="_blank">
              <AiFillFacebook className="w-8 h-8" />
            </a>
          </Link>
        </div>
      </footer>
      <div className="flex justify-center items-center pt-4 pb-4">
        <MdEmail className="w-6 h-6" />
        <div className="pl-1">mohammedalihw@gmail.com</div>
      </div>
    </>
  );
}
