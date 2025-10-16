type CategoryProps = {
  category: string;
  image: string;
}

export default function Category({category, image}: CategoryProps) {

  return (
    <li className="category-item">
      <div className="category-item-text">
        {category}
      </div>
      <img src={image} className="category-image"></img>
    </li>
  );
}
