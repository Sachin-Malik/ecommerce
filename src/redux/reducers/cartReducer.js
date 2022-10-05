import { ADD_TO_CART, UPDATE_CART } from "../types/cartTypes";

const initialState = {
  cartItems: [
    {
      id: 1045,
      count: 1,
      title: "Smart Watch",
      price: 100,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://api.lorem.space/image/watch?w=640&h=480&r=4552",
      },
      images: [
        "https://api.lorem.space/image/watch?w=640&h=480&r=2809",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4738",
        "https://api.lorem.space/image/watch?w=640&h=480&r=7939",
      ],
    },
    {
      id: 34,
      title: "Handcrafted Fresh Chair",
      count: 1,
      price: 250,
      description:
        "The Football Is Good For Training And Recreational Purposes",
      category: {
        id: 5,
        name: "Others",
        image: "https://api.lorem.space/image?w=640&h=480&r=9748",
      },
      images: [
        "https://api.lorem.space/image?w=640&h=480&r=5978",
        "https://api.lorem.space/image?w=640&h=480&r=1600",
        "https://api.lorem.space/image?w=640&h=480&r=2656",
      ],
    },
  ],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.push(action.payload),
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
