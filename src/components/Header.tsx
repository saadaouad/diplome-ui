import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-20">
      <nav className="flex">
        <Link href="/">
          <Image src="/morocco.png" height={70} width={70} alt="Morocco" />
        </Link>
        <div className="flex justify-between w-full">
          <ul className="flex items-center mx-16">
            <li>
              <Link
                className="mx-3 font-medium text-black hover:text-sky-700"
                href="/how-it-works"
              >
                How it works?
              </Link>
            </li>
          </ul>
          <ul className="flex items-center">
            <li>
              <Link
                className="px-4 py-2 mx-2 rounded-3xl font-medium bg-sky-600 hover:bg-sky-700 text-white pointer"
                href="/"
              >
                Get started
              </Link>
            </li>
            <li>
              <Link
                className="mx-3 font-medium text-black hover:text-sky-700"
                href="/user/login"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
