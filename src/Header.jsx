import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="overflow-hidden py-8 md:py-12 z-30 w-full">
      <nav
        aria-label="Navigation principale"
        className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:gap-10"
      >
        <Link to="/" className="motion-standard text-center text-white hover:scale-[1.02]">
          <span className="text-xl font-medium text-dorado md:text-3xl lg:text-4xl">
            Notre Équipe
          </span>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-dorado"></div>
          </div>
        </Link>
        <div className="text-center text-white">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
            KhadijaTnana
          </h1>
          <p className="text-2xl font-medium text-dorado md:text-3xl lg:text-4xl">
            Fondation
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 bg-dorado"></div>
          </div>
        </div>
        <Link to="/about" className="motion-standard text-center text-white hover:scale-[1.02]">
          <span className="text-xl font-medium text-dorado md:text-3xl lg:text-4xl">
            À propos
          </span>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-dorado"></div>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
