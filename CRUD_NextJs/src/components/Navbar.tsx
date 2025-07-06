import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">MyCRUD</Link>
        </div>
        <div className="flex-none">
          <Link href="/posts/create" className="btn btn-primary">
            Buat Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;