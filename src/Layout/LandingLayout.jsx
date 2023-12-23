import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "/logo.png";
import { menu } from "../utils/menu";
import useAuth from "../hooks/useAuth";

const LandingLayout = () => {
  const { auth, cerrarSesionAuth } = useAuth();

  const location = useLocation();

  console.log(location.pathname);

  const open = (e) => {
    document.getElementById(e)?.classList.toggle("hidden");
  };

  const openMobile = (e) => {
    document.getElementById(`${e}-mobile`)?.classList.toggle("hidden");
  };

  const openMenu = (e) => {
    document.getElementById(e)?.classList.toggle("hidden");
  };

  return (
    <div>
      <div className="p-10 flex items-center justify-between shadow fixed w-screen bg-white z-20">
        <Link to="/">
          <img src={Logo} className="w-[200px]" />
        </Link>

        <div className="md:flex hidden">
          {menu.map((e) => (
            <Link
              to={e.link}
              onMouseEnter={() => open(e.key)}
              onMouseLeave={() => open(e.key)}
              className={`${
                auth.token && e.key == "login" && "hidden"
              } relative flex items-center gap-3 p-1 hover:bg-gray-100 rounded-full px-3 cursor-pointer`}
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
          {auth.token && (
            <div
              onMouseEnter={() => open(auth.token)}
              onMouseLeave={() => open(auth.token)}
              className="font-semibold relative flex items-center gap-3 p-1 hover:bg-gray-100 rounded-full px-3 cursor-pointer"
            >
              Hello {auth.name}! <i class="fas fa-sort-down"></i>
              <div
                className="absolute top-0 left-0 border bg-white w-full rounded-lg hidden"
                id={auth.token}
              >
                <ul>
                  <li
                    className="font-semibold border-b p-2 hover:text-[#2dbf1d]"
                    onClick={cerrarSesionAuth}
                  >
                    Cerrar Sesión
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden flex">
          <div
            onClick={() => openMenu("menu")}
            className="cursor-pointer border hover:text-white hover:bg-[#2dbf1d] w-10 h-10 flex items-center justify-center rounded-xl"
          >
            <i class="fas fa-bars"></i>
          </div>
        </div>

        <div
          className="absolute w-screen top-0 left-0 z-20 md:hidden block hidden"
          id="menu"
        >
          <div className="bg-white flex justify-center pt-10 pb-5">
            <div
              className="absolute right-5 top-2 text-2xl cursor-pointer"
              onClick={() => openMenu("menu")}
            >
              <i class="fas fa-times"></i>
            </div>

            <div>
              <img src={Logo} className="w-[200px] mb-10" />

              <div className="grid justify-center text-center gap-3">
                {auth.token && (
                  <div>
                    <div
                      onClick={() => openMobile(auth.token)}
                      className="font-bold gap-3 p-1 hover:bg-gray-100 rounded-full px-3 cursor-pointer flex justify-center"
                    >
                      Hello {auth.name}!<i class="fas fa-sort-down"></i>
                    </div>
                    <div
                      className="top-0 left-0 border bg-white w-full rounded-lg hidden"
                      id={`${auth.token}-mobile`}
                    >
                      <ul>
                        <li
                          className="font-semibold border-b p-2 hover:text-[#2dbf1d]"
                          onClick={cerrarSesionAuth}
                        >
                          Cerrar Sesión
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {menu.map((e) => (
                  <div>
                    <Link
                      to={e.link}
                      onClick={() => openMobile(e.key)}
                      className={`${
                        auth.token && e.key == "login" && "hidden"
                      } gap-3 p-1 hover:bg-gray-100 rounded-full px-3 cursor-pointer flex justify-center`}
                    >
                      {e.title}
                      {e.submenu && <i class="fas fa-sort-down"></i>}
                    </Link>

                    {e.submenu && (
                      <div
                        className="top-0 left-0 border bg-white w-full rounded-lg hidden"
                        id={`${e.key}-mobile`}
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            onClick={() => openMenu("menu")}
            className="bg-black w-screen h-screen top-0 left-0 opacity-30"
          ></div>
        </div>
      </div>

      {location.pathname !== "/" &&
        location.pathname !== "/reduce" &&
        location.pathname !== "/offset" &&
        location.pathname !== "/cost-savings" && (
          <div className="background-scopes"></div>
        )}

      {location.pathname !== "/" &&
      location.pathname !== "/reduce" &&
      location.pathname !== "/offset" &&
      location.pathname !== "/cost-savings" ? (
        <div className="pt-36 xl:px-24 md:px-10 md:pr-[28%] pr-10 px-10  2xl:pr-[18%] xl:pr-[28%]">
          <Outlet />
        </div>
      ) : (
        <div className="pt-28">
          <Outlet />
        </div>
      )}

      <div className="bg-[#2dbf1d] p-5">
        <p className="text-center text-xl text-white font-semibold">
          <i class="far fa-copyright mr-2"></i>2023 All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default LandingLayout;
