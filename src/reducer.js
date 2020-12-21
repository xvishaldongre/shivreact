export const initalState = {
    basket: [
        
    ],
    user: null,
}; 

function reducer(state, action) {
    // console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(...state.basket)
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_CART':
            console.log([...state.basket])
            let nCart = [...state.basket];
            var cart_bas=state.basket;
            // const index = state.basket.findIndex((basketItem) => basketItem.id == action.id)
            const index = cart_bas.findIndex(x => x.id == action.id);
            console.log(nCart[0].id)
            console.log(index)
            console.log(action.id.id)
            if (1 >= 0) {
                nCart.splice(1,1)
            } else {
                console.warn(
                    `id is not to basket`
                )
            }
            return {...state ,basket: nCart};
        default:
            return state; 
    }
}
export default reducer;
