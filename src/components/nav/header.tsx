import React from "react";
import Logo from "../logo";
import NavBarContainer from "./navBarContainer";
import MenuLink from "./menuLink";

const Header = (props) => {
  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuLink />
    </NavBarContainer>
  );
};
export default Header;
