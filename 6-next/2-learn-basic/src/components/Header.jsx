import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold">My Shop</h1>
      <nav className="flex gap-4">
        <Link className=" text-blue-700 underline" href="/">
          Home
        </Link>
        <Link className=" text-blue-700 underline" href="/about-us">
          About
        </Link>
        <Link className=" text-blue-700 underline" href="/products">
          Products
        </Link>
        <Link className=" text-blue-700 underline" href="/faq">
          FAQ
        </Link>
        <Link className=" text-blue-700 underline" href="/contact-us">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
