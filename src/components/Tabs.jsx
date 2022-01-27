import React, { useEffect, useState } from "react";

import {
  CreditCardIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Cart from "./common/Cart";

const Tabs = () => {
  const [click, setClick] = useState(1);
  const tabs = [
    { name: "My Account", href: "/", icon: UserIcon, current: false },
    { name: "Company", href: "/", icon: OfficeBuildingIcon, current: false },
    { name: "Team Members", href: "/", icon: UsersIcon, current: true },
    { name: "Billing", href: "/", icon: CreditCardIcon, current: false },
  ];

  useEffect(() => {
    console.log(click);
  }, [click]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div className="py-10">
        <div className="sm:hidden">
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab, index) => (
                <button
                  onClick={console.log({ index })}
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    click === index
                      ? "border-red-500 text-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  <span
                    className={classNames(
                      tab.current ? "text-red-500" : "",
                      "-ml-0.5 mr-2 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Tabs;
