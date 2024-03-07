import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import data from "./data";

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: data,
    total: 0,
    amount: 0,
  }
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: "CLEAR"})
    }

    const inc = (id) => {
        dispatch({type: "inc", payload: id})
    }
    const dec = (id) => {
        dispatch({type: "dec", payload: id})
    }
    const remove = (id) => {
        dispatch({type: "remove", payload: id})
    }

    // const ctotal = () => {
    //     dispatch({ type: "total" });
    // }
    // const price = () => {
    //     dispatch({ type: "tprice" });
    // }


    useEffect(() => {
        // ctotal() 
        // price()
        dispatch({type: "get_total"})
    },[state])
    


    return (
        <AppContext.Provider value={{
            ...state,
            clearCart,
            inc,
            dec,
            remove,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
} 

export { AppContext, AppProvider };