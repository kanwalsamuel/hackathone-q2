
// // // cartContext.tsx
// // "use client";
// // import React, { createContext, useContext, useState } from 'react';

// // type CartItem = {
// //   product: Product;
// //   quantity: number;
// // };

// // type CartContextType = {
// //   cartItems: CartItem[];
// //   addToCart: (product: Product) => void;
// //   removeFromCart: (productId: string) => void;
// //   updateQuantity: (productId: string, quantity: number) => void;
// // };

// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // export const CartProvider: React.FC = ({ children }) => {
// //   const [cartItems, setCartItems] = useState<CartItem[]>([]);

// //   const addToCart = (product: Product) => {
// //     setCartItems((prev) => {
// //       const existingProduct = prev.find(item => item.product._id === product._id);
// //       if (existingProduct) {
// //         return prev.map(item =>
// //           item.product._id === product._id
// //             ? { ...item, quantity: item.quantity + 1 }
// //             : item
// //         );
// //       } else {
// //         return [...prev, { product, quantity: 1 }];
// //       }
// //     });
// //   };

// //   const removeFromCart = (productId: string) => {
// //     setCartItems((prev) => prev.filter(item => item.product._id !== productId));
// //   };

// //   const updateQuantity = (productId: string, quantity: number) => {
// //     setCartItems((prev) =>
// //       prev.map((item) =>
// //         item.product._id === productId ? { ...item, quantity } : item
// //       )
// //     );
// //   };

// //   return (
// //     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // export const useCart = (): CartContextType => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error("useCart must be used within a CartProvider");
// //   }
// //   return context;
// // };





// "use client";
// import React, { createContext, useContext, useState } from 'react';

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// };

// type CartItem = {
//   product: Product;
//   quantity: number;
// };

// type CartContextType = {
//   cartItems: CartItem[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (product: Product) => {
//     setCartItems((prev) => {
//       const existingProduct = prev.find(item => item.product._id === product._id);
//       if (existingProduct) {
//         return prev.map(item =>
//           item.product._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prev, { product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId: string) => {
//     setCartItems((prev) => prev.filter(item => item.product._id !== productId));
//   };

//   const updateQuantity = (productId: string, quantity: number) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.product._id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };


"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Product = {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cartItems');
    }
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(item => item.product._id === product._id);
      if (existingProduct) {
        return prev.map(item =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter(item => item.product._id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

