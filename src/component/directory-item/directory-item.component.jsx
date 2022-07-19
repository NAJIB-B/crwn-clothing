import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  Title,
  P,
} from "./directory-item.style.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImage>
      <Body>
        <Title>{title}</Title>
        <P>Shop Now</P>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
