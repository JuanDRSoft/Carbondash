import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "/logo.png";
import { menu } from "../utils/menu";

const LandingLayout = () => {
  const open = (e) => {
    document.getElementById(e)?.classList.toggle("hidden");
  };

  return (
    <div>
      <div className="p-10 flex items-center justify-between shadow fixed w-screen bg-white">
        <Link to="/">
          <img src={Logo} className="w-[200px]" />
        </Link>

        <div className="flex">
          {menu.map((e) => (
            <Link
              to={e.link}
              onMouseEnter={() => open(e.key)}
              onMouseLeave={() => open(e.key)}
              className="relative flex items-center gap-3 p-1 hover:bg-gray-100 rounded-full px-3 cursor-pointer"
            >
              {e.title}
              {e.submenu && <i class="fas fa-sort-down"></i>}

              {e.submenu && (
                <div
                  className="absolute top-0 left-0 border bg-white w-full rounded-lg hidden"
                  id={e.key}
                >
                  <ul>
                    {e.submenu.map((e) => (
                      <Link to={e.link}>
                        <li className="font-semibold border-b p-2 hover:text-[#2dbf1d]">
                          {e.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-[16vh] p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingLayout;
