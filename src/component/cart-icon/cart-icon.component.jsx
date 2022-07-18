import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

const CartIcon = () => {
  const { dropdown, setDropdown, cartCount } = useContext(DropdownContext);

  const handleClick = () => setDropdown(!dropdown);

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
