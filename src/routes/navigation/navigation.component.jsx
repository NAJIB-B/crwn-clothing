import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";


import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";

import { selectDropdown } from "../../store/dropdown/dropdown.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dropdown = useSelector(selectDropdown);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon></CartIcon>
        </NavLinks>
        {dropdown && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
