import React from 'react';

/**
 * Navbar component
 * @constructor
 */
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const loggedIn = false;
  return (
    <>
      <nav
        className="
        relative flex flex-wrap items-center
        justify-between px-2 py-3 bg-transparent mb-3
        border-gray-300 border-solid border-[1px]
        "
      >
        <div
          className="
          container px-4 mx-auto flex flex-wrap items-center justify-between
          "
        >
          <div
            className="
            w-full relative flex justify-between
            lg:w-auto lg:static lg:block lg:justify-start
            "
          >
            <a
              className="
              text-sm font-bold leading-relaxed inline-block mr-4
              py-2 whitespace-nowrap text-gray-600 text-xl text-center
              "
              href="/#"
            >
              RatLocales
            </a>
            <button
              className="
              text-gray-600 cursor-pointer text-xl leading-none px-3
               py-1 border border-solid border-transparent rounded
                bg-transparent block lg:hidden outline-none focus:outline-none
                "
              type="button"
              data-testid="navbar-toggle"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="bx bx-menu"></i>
            </button>
          </div>
          <div
            data-testid="navbar-collapse"
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul
              className=
                "flex flex-col lg:flex-row list-none lg:ml-auto text-center"
            >
              <li className="nav-item">
                <a
                  className="
                  px-3 py-2 flex items-center text-base
                  font-bold leading-snug text-gray-600
                  "
                  href="/"
                >
                  <span>
                    Projects
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <div className="group inline-block relative">
                  <button
                    className="
                    text-gray-600 font-bold text-base
                    py-2 px-4 inline-flex"
                  >
                    <span className={(loggedIn ? 'hidden' : '')}>
                      User
                    </span>
                    <i
                      className={
                        'bx bx-user' +
                        'text-xl text-gray-600' +
                        (loggedIn ? '' : 'hidden')
                      }
                    >
                    </i>
                    <i
                      className="
                        bx bx-chevron-down
                        text-xl text-gray-600
                       "
                    >
                    </i>
                  </button>
                  <ul className="absolute hidden
                   text-gray-700 pt-1 group-hover:block">
                    <li className={(loggedIn ? '' : 'hidden')}>
                      <a
                        className="
                        rounded-b
                        bg-gray-200 hover:bg-gray-400
                        py-2 px-4 block whitespace-no-wrap
                        "
                        href="/login"
                      >
                        Log In
                      </a>
                    </li>
                    <li className={(loggedIn ? '' : 'hidden')}>
                      <a
                        className="rounded-b
                         bg-gray-200 hover:bg-gray-400
                          py-2 px-4 block whitespace-no-wrap"
                        href="/register"
                      >
                        Register
                      </a>
                    </li>
                    <li className={(loggedIn ? 'hidden' : '')}>
                      <a
                        className="rounded-b
                         bg-gray-200 hover:bg-gray-400
                          py-2 px-4 block whitespace-no-wrap"
                        href="/dashboard"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className={(loggedIn ? 'hidden' : '')}>
                      <a
                        className="rounded-b
                         bg-gray-200 hover:bg-gray-400
                          py-2 px-4 block whitespace-no-wrap"
                        href="/logout"
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
