import { Disclosure } from "@headlessui/react";

import TopBar from "./TopBar";
import MainNav from "./MainNav";

export default function Example() {
  return (
    <Disclosure as="header" className="bg-white shadow-xl">
      {({ open }) => (
        <>
          <div className="min-w-min mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-0">
            <TopBar />
            <MainNav />
          </div>
        </>
      )}
    </Disclosure>
  );
}
