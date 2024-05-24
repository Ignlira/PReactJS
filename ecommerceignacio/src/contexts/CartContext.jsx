
import {createContext, useState} from "react";

export const CartContext = (children) => {
    const [items, setItems] = useState([]);
  
    const clear = () => setItems([]);
  
    const removeItem = (id) => {
      const filteredItems = items.filter((item) => item.id !== id);
      setItems(filteredItems);
    };
  
    const addItem = (item, quantity) => {
      const isExists = items.some((item) => item.id === item.id);
  
      if (isExists) {
        const updatedItems = items.map((item) => {
          if (item.id === item.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
  
          return item;
        });
  
        setItems(updatedItems);
      } else {
        setItems([...items, { id: item.id, quantity, name: item.name }]);
      }
    };

    return (
        <CartContext.Provider value={{ addItem, clear, items, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};


