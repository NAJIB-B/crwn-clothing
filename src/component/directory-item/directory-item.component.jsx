import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  Title,
  P,
} from "./directory-item.style.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <Title>{title}</Title>
        <P>Shop Now</P>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
