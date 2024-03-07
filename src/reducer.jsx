const reducer = ( state,action) => {
    
    if (action.type === "CLEAR") {
        return {...state, cart : []}
    }

    if (action.type === "inc") {
        let citem = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            
            }
            return item
        })
        return { ...state, cart : citem}
    }
    if (action.type === "dec") {
        let citem = state.cart.map((item) => {
            if (item.id === action.payload && item.amount > 1) {
                return { ...item, amount: item.amount - 1 }

            
            }
            return item
        })
        return { ...state, cart : citem}
    }

    if (action.type === "remove") {
        let citem = state.cart.filter((item) => item.id !== action.payload);
        return {...state, cart: citem}
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem
            const itemTotal = price * amount
    
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
          },
          {
            total: 0,
            amount: 0,
          }
        )
        total = parseFloat(total.toFixed(2))
    
        return { ...state, total, amount }
    }
    if (action.type === "get_total") {
        let { total, amount } = state.cart.reduce((ct, ci) => {
            const { amount, price } = ci;
            const itotal = amount * price;

            ct.total += itotal;
            ct.amount += amount;
            return ct;
        },
        {
            total: 0,
            amount: 0,
            }
        )
        return{...state, total, amount}
    }
    // calc amount how much 
    // if (action.type === "total") {
    //     let total = state.cart.reduce((sum, item) => sum + item.amount,0);
    //     let tprice = state.cart.reduce((sum, item) => sum + item.amount * item.price, 0);
    //     return {...state, amount: total, total : tprice}
    // }
    // if (action.type === "tprice") {
    //     let tprice = state.cart.reduce((sum, item) => sum + item.amount * item.price, 0);
    //     return {...state, total: tprice}
    // }


  return state
}

export default reducer;


