import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-white pt-[30px] pb-5 border-t border-[#d9d9d9]">
      <div className="lg:container mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between pb-6 gap-6 lg:gap-0">
          {/* logo */}
          <div className="logo_wrapper " >
            <Link to={"/"} className="no-underline!">
              <h3 className="text-2xl text-[#484848]! font-normal">Our eCom</h3>
            </Link>
          </div>

          {/* navbar */}
          <nav className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-14">
            <NavLink
              to={"/"}
              className="text-sm sm:text-base text-[#484848]! capitalize font-normal font-poppins no-underline!"
            >
              support center
            </NavLink>
            <NavLink
              to={"/"}
              className="text-sm sm:text-base text-[#484848]! capitalize font-normal font-poppins no-underline!"
            >
              invoicing
            </NavLink>
            <NavLink
              to={"/"}
              className="text-sm sm:text-base text-[#484848]! capitalize font-normal font-poppins no-underline!"
            >
              contact
            </NavLink>
            <NavLink
              to={"/"}
              className="text-sm sm:text-base text-[#484848]! capitalize font-normal font-poppins no-underline!"
            >
              careers
            </NavLink>
            <NavLink
              to={"/"}
              className="text-sm sm:text-base text-[#484848]! capitalize font-normal font-poppins no-underline!"
            >
              blog
            </NavLink>
            <NavLink
              to={"/"}
              className="text-sm sm:text-base text-[#484848]! capitalize font-normal font-poppins no-underline!"
            >
              FAQs
            </NavLink>
          </nav>
        </div>

        {/* COPYRIGHT */}
        <div className="flex items-center justify-center">
          <p className="text-sm text-[#484848] font-poppins font-normal text-center">
            Copyright &copy; 2025 Our eCom. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
