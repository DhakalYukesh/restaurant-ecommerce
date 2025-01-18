import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface intialCartItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface cartSliceProps {
    items: intialCartItemProps[];
    totalQuantity: number;
    totalPrice: number;
}

const saveToLocalStorage = (cart: cartSliceProps) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};


const loadFromLoacalStorage = (): cartSliceProps => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : { items: [], totalQuantity: 0, totalPrice: 0 };
}

const initialState: cartSliceProps = loadFromLoacalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<intialCartItemProps, 'quantity'>>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
            saveToLocalStorage(state);
        },
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;