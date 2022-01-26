const Nav = () => {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "About Us", href: "#", current: false },
    { name: "Contact us", href: "#", current: false },
    { name: "Blog", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div className="flex items-center space-x-10">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="inline-flex  items-center font-semibold"
            aria-current={item.current ? "page" : undefined}
          >
            <spam
              className={classNames(
                item.current ? "w-2.5 h-0.5 bg-red-500 mr-1" : "hidden"
              )}
            ></spam>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
