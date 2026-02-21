import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export default function AppPages() {
  return (
    <>
      <header className="p-4 flex justify-between items-center">
        <img
          src="https://fisiotali.sirv.com/landing/images/logo-mini.png"
          alt="logo de fisiotali"
          className="w-24"
        />
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="bg-lime-500 text-white px-4 py-2 rounded">
          Agendar Cita
        </button>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
