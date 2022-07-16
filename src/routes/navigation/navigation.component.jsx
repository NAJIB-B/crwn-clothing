import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { DropdownContext } from "../../contexts/dropdown.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropdown } = useContext(DropdownContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          
            <CartIcon></CartIcon>
          
        </div>
        {dropdown && <CartDropdown></CartDropdown>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
