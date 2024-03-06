import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import data from "./data";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 20,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const inc = (id) => {
    dispatch({ type: "inc", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        inc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
