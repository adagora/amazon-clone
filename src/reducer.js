export const initialState = {
    basket:[
        {
            id:"12324",
            title:"The lean startup",
            price:10.45,
            rating:5,
            image:"https://f01.esfr.pl/foto/3/3706493058/50f4ae137f5a219040582f0b3f31f7ad/philips-hp8230-00,3706493058_7.jpg",
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
    
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // logic for Removing item frombasket
            
            // we cloned the basket
            let newBasket = [...state.basket];

            //  we check to see if product exists
            const index = state.basket.findIndex((
                basketItem) => basketItem.id === action.id
            );
            
            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id} as it is not in busket)`
                );
            }
                
            return { 
                ...state, 
                basket: newBasket,
            };
        default: 
            return state;
    }
};

export default reducer;