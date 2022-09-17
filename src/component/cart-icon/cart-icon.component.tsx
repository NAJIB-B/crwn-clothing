import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.style";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useSelector } from "react-redux";

import { setDropdown } from "../../store/dropdown/dropdown.action";
import {
  selectDropdown,
  selectCartCount,
} from "../../store/dropdown/dropdown.selector";
import { useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const dropdown = useSelector(selectDropdown);
  const cartCount = useSelector(selectCartCount);

  const handleClick = () => dispatch(setDropdown(!dropdown));

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
