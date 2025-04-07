import { IMenu } from "../models/MenuModel.tsx";
import { OTHER_DATA } from "./OtherData.tsx";
import { PIZZA_DATA } from "./PizzaData.tsx";
import { TOPPING_DATA } from "./ToppingData.tsx";

export const MENU_DATA: IMenu = {
    pizzas: PIZZA_DATA,
    toppings: TOPPING_DATA,
    others: OTHER_DATA
}