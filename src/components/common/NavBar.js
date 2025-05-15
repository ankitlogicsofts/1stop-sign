import React, { useState, useEffect } from "react";
import { Toolbar, Box, Skeleton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import menuItems from "../../../menu.json";
import { motion } from "framer-motion";
const Navbar = ({ setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(null); // Track open menu
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu
  // const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768; // Detect mobile

  const handleMenuToggle = (e, menuName) => {
    e.stopPropagation(); // Prevent the link click
    e.preventDefault(); // Prevent default link behavior
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleSubMenuToggle = (e, subMenuName) => {
    e.stopPropagation(); // Prevent the link click
    e.preventDefault(); // Prevent default link behavior
    setOpenSubMenu(openSubMenu === subMenuName ? null : subMenuName);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  const items = menuItems.menuitems || [];
  // console.log(items);

  const animationProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <Box position="static">
      <Toolbar className="navBar" component={motion.div} {...animationProps}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Box className="menu-item" key={index}>
                <Skeleton
                  variant="text"
                  width={100}
                  height={40}
                  className="menu-link"
                />
              </Box>
            ))
          : items.map((menu, index) => (
              <motion.div {...animationProps} key={index}>
                <Box
                  className="menu-item"
                  onMouseEnter={() => setOpenMenu(menu.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={menu.link || "#"}
                    className="menu-link"
                    onClick={handleLinkClick}
                  >
                    {menu.name}
                  </Link>
                  {menu.children && menu.children.length > 0 && (
                    <ExpandMoreIcon
                      className="arrow-icon"
                      onClick={(e) => handleMenuToggle(e, menu.name)}
                    />
                  )}
                  {menu.children && openMenu === menu.name && (
                    <Box className="dropdown">
                      {menu.children.map((item) => (
                        <Box
                          className="dropdown-item"
                          key={item.name}
                          onMouseEnter={() => setOpenSubMenu(item.name)}
                          onMouseLeave={() => setOpenSubMenu(null)}
                        >
                          <Link
                            href={item.link || "#"}
                            className="submenu-link"
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                          {item.children && item.children.length > 0 && (
                            <ArrowRightIcon
                              className="iconSubMenu"
                              onClick={(e) => handleSubMenuToggle(e, item.name)}
                            />
                          )}
                          {item.children && openSubMenu === item.name && (
                            <Box className="sub-dropdown">
                              {item.children.map((submenu) => (
                                <Box
                                  className="sub-dropdown-item"
                                  key={submenu.name}
                                >
                                  <Link
                                    href={submenu.link || "#"}
                                    className="submenu-link"
                                    onClick={handleLinkClick}
                                  >
                                    {submenu.name}
                                  </Link>
                                </Box>
                              ))}
                            </Box>
                          )}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </motion.div>
            ))}
      </Toolbar>
    </Box>
  );
};

export default Navbar;
