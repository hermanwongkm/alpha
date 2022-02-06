import React from "react";
import Logo from "../logo";
import NavBarContainer from "./navBarContainer";
import MenuLink from "./menuLink";

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuLink />
    </NavBarContainer>
  );
};
export default Header;
