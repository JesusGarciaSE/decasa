import { IMenuItem } from "../models/MenuItem";
import { PIZZA_NAMES, PIZZA_TOPPINGS } from "./Strings";

export const PIZZA_DATA: IMenuItem[] = [
    {
        name: PIZZA_NAMES.margherita,
        ingrediants: PIZZA_TOPPINGS.margherita,
        price: 18
    },
    {
        name: PIZZA_NAMES.pepperoni,
        ingrediants: PIZZA_TOPPINGS.pepperoni,
        price: 18
    },
    {
        name: PIZZA_NAMES.cheese,
        ingrediants: PIZZA_TOPPINGS.cheese,
        price: 17
    },
    {
        name: PIZZA_NAMES.hot,
        ingrediants: PIZZA_TOPPINGS.hot,
        price: 21
    },
    {
        name: PIZZA_NAMES.truffle,
        ingrediants: PIZZA_TOPPINGS.truffle,
        price: 21
    },
    {
        name: PIZZA_NAMES.veggie,
        ingrediants: PIZZA_TOPPINGS.veggie,
        price: 18
    },
    {
        name: PIZZA_NAMES.marina,
        ingrediants: PIZZA_TOPPINGS.marina,
        price: 17
    },
    {
        name: PIZZA_NAMES.bianca,
        ingrediants: PIZZA_TOPPINGS.bianca,
        price: 17
    },
]