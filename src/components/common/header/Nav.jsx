import { Link } from "react-router-dom";

const Nav = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
    { name: "blog", href: "/blog", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:space-x-10">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="inline-flex  items-center font-semibold capitalize text-xl lg:text-base"
            aria-current={item.current ? "page" : undefined}
          >
            <span
              className={classNames(
                item.current ? "w-2.5 h-0.5 bg-red-500 mr-1" : "hidden"
              )}
            ></span>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
