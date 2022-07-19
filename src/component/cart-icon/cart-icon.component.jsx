import {
  CartIconContainer,
  ShoppingIconn,
  ItemCount,
} from "./cart-icon.style.jsx";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

const CartIcon = () => {
  const { dropdown, setDropdown, cartCount } = useContext(DropdownContext);

  const handleClick = () => setDropdown(!dropdown);

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIconn className="shopping-icon"></ShoppingIconn>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
