import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.style.jsx";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}></DirectoryItem>
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
