import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex h-14 w-full items-center justify-center bg-yellow-400 text-3xl">
      <Link href="/" passHref>
        Sport Thieme Coaches
      </Link>
    </div>
  );
};

export default NavBar;
