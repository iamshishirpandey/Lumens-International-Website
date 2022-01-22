import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { FiChevronDown } from "react-icons/fi";
import TopBar from "./TopBar";
import { FaPhone, FaSearch, FaShoppingBag } from "react-icons/fa";

const navigation = [
  {
    id: 1,
    name: "Dashboard",
    href: "#",
    icon: HomeIcon,
    current: true,
    option: true,
    links: [
      { name: "Dashboard", href: "#" },
      { name: "Dashboard", href: "#" },
      { name: "Dashboard", href: "#" },
      { name: "Dashboard", href: "#" },
      { name: "Dashboard", href: "#" },
      { name: "Dashboard", href: "#" },
      { name: "Dashboard", href: "#" },
    ],
  },
  { id: 2, name: "Team", href: "#", icon: UsersIcon, current: false },
  { id: 3, name: "Projects", href: "#", icon: FolderIcon, current: false },
  { id: 4, name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { id: 5, name: "Documents", href: "#", icon: InboxIcon, current: false },
  { id: 6, name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 xl:hidden overflow-y-scroll"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative z-50 flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-16 pt-6">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <XIcon
                        className="h-10 w-10 text-blue-900"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex bg-white">
                  <div className="justify-center w-full flex-shrink-0 space-y-6 group">
                    <div className="w-full text-center pt-8">
                      <a
                        href="/"
                        className="text-3xl w-full font-bold text-red-600"
                      >
                        LUMENS
                      </a>
                    </div>
                    <nav className="space-y-1 w-full">
                      <ul className="text-center p-5 text-lg">
                        {navigation.map((item) => (
                          <>
                            <li
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? "text-white bg-red-500"
                                  : "text-gray-900",
                                item.id === navigation.length ? "" : "border-b",
                                "w-full p-3 flex justify-between items-center"
                              )}
                            >
                              <a
                                href={item.href}
                                className="flex-1 w-full"
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                              <button type="button" onClick={() => {}}>
                                <FiChevronDown className="w-5 h-5" />
                              </button>
                            </li>
                            {item.current && item.option && (
                              <ul>
                                {item.links.map((ite) => (
                                  <li
                                    key={ite.name}
                                    className={classNames(
                                      item.id === navigation.length
                                        ? ""
                                        : "border-b",
                                      "w-full p-3 flex justify-center items-center"
                                    )}
                                  >
                                    <a href="/">{ite.name}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ))}
                      </ul>
                    </nav>
                    <ul className="flex items-center justify-center space-x-5">
                      <li>
                        <button>
                          <FaSearch className="h-10 pt-1" />
                        </button>
                      </li>
                      <li>
                        <a href="/">
                          <FaShoppingBag className="h-10" />
                        </a>
                      </li>
                      <li>
                        <button className="text-white text-sm font-semibold py-3 px-5  flex items-center space-x-3  bg-red-500 hover:-translate-y-1.5 hover:shadow-sm hover:shadow-gray-600 hover:transition-all">
                          <FaPhone className="rotate-90 " />
                          <spam>9898989898</spam>
                        </button>
                      </li>
                    </ul>
                    <div>
                      <TopBar />
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        <div className="flex flex-col flex-1">
          <div className="sticky top-0 z-10 xl:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-blue-500"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
