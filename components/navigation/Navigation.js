import { useContext, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import nav from "../../assets/icons/nav-icon.svg";
// import cartIcon from "../../assets/icons/cartIcon.svg";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  StyledCartItem,
  StyledLogo,
  StyledNavIcon,
  StyledNavigation,
  StyledNavigationBar,
  StyledNavLink,
  StyledNavActions,
  StyledActions,
} from "./styledComponents";
import { useRouter } from "next/router";
import NavMenu from "./NavMenu";

function Navigation(props) {

  const router = useRouter();
  const { data: session } = useSession();
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);
  const onNavHandler = () => {
    setIsNavMenuShown((prevState) => {
      return !prevState;
    });
  };

  const navLogoHandler = () => {
    router.push("/");
    if (isNavMenuShown) {
      setIsNavMenuShown(false);
    }
  };

  return (
    <StyledNavigation isVisible={isNavMenuShown}>
      <StyledNavigationBar>
        <StyledLogo onClick={navLogoHandler} isVisible={isNavMenuShown}>
          <img src={logo.src} alt="logo"></img>
        </StyledLogo>
        <StyledNavIcon isVisible={isNavMenuShown}>
          <img src={nav.src} onClick={onNavHandler} alt="nav menu"></img>
        </StyledNavIcon>
      </StyledNavigationBar>
      {isNavMenuShown && <NavMenu onNavClick={onNavHandler} />}
    </StyledNavigation>
  );
}

export default Navigation;
