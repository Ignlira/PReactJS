
import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <Container className="item-detail">
      <h1>{product.title}</h1>
      <img src={product.imageId} style={{ height: 450, width: "auto" }} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount
        max={product.stock} 
        onAdd={(quantity) => {
          handleAddToCart(quantity);
        }}
      />
    </Container>
  );
};

