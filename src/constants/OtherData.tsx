import { IMenuItem } from "../models/MenuItem";
import { OTHER_NAMES, OTHER_INGREDIENTS } from "./Strings";

export const OTHER_DATA: IMenuItem[] = [
    {
        name: OTHER_NAMES.meatballs,
        ingrediants: OTHER_INGREDIENTS.meatballs,
        price: 18
    },
    {
        name: OTHER_NAMES.calzone,
        ingrediants: OTHER_INGREDIENTS.calzone,
        price: 17
    },
    {
        name: OTHER_NAMES.cheesy,
        ingrediants: OTHER_INGREDIENTS.cheesy,
        price: 7
    },
    {
        name: OTHER_NAMES.salad,
        ingrediants: OTHER_INGREDIENTS.salad,
        price: 7
    }
]