import { Disclosure } from "@headlessui/react";

import TopBar from "./TopBar";
import MainNav from "./MainNav";

export default function Example() {
  return (
    <Disclosure as="header" className="shadow-xl">
      {({ open }) => (
        <>
          <div className="min-w-min mx-auto px-2 sm:px-4 xl:divide-y xl:divide-gray-200 xl:px-0">
            <div className="hidden xl:block">
              <TopBar />
            </div>
            <MainNav />
          </div>
        </>
      )}
    </Disclosure>
  );
}
