import React from "react";
import "tw-elements";
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

const SideBarContant = () => {
  const navigation = [
    {
      id: "One",
      name: "Dashboard",
      href: "#",
      icon: HomeIcon,
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

    {
      id: "Two",
      name: "Team",
      href: "#",
      icon: UsersIcon,
      current: false,
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
    {
      id: "Three",
      name: "Projects",
      href: "#",
      icon: FolderIcon,
      current: false,
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
    {
      id: "Four",
      name: "Calendar",
      href: "#",
      icon: CalendarIcon,
      current: false,
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
    {
      id: "Five",
      name: "Documents",
      href: "#",
      icon: InboxIcon,
      current: false,
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
    {
      id: "Six",
      name: "Reports",
      href: "#",
      icon: ChartBarIcon,
      current: false,
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
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {navigation.map((item, index) => (
        <div class="accordion accordion-flush w-34" id="accordionFlushExample">
          <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id={`flush-heading${item.id}`}>
              <button
                class="accordion-button
            relative
            flex
            items-center
            w-full
            py-4
            px-5
            text-base text-gray-800 text-left
            bg-white
            border-0
            rounded-none
            transition
            focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${item.id}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${item.id}`}
              >
                <div
                  className={classNames(
                    item.current ? "text-white bg-red-500" : "text-gray-900",
                    index + 1 === navigation.length ? "" : "border-b",
                    "w-full p-3 flex justify-between items-center"
                  )}
                >
                  {item.name}
                </div>
              </button>
            </h2>
            <div
              id={`flush-collapse${item.id}`}
              class={`accordion-collapse border-0 collapse  ${
                index === 0 && "show"
              }`}
              aria-labelledby={`flush-heading${item.id}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body py-4 px-5">
                <ul>
                  {item.links.map((ite, index) => (
                    <li
                      key={ite.name}
                      className={classNames(
                        index + 1 === item.links.length ? "" : "border-b",
                        "w-full p-3 flex justify-center items-center"
                      )}
                    >
                      <a href="/">{ite.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SideBarContant;
