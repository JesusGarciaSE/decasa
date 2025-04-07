import { IMenuItem } from './MenuItem.tsx';
import { IExtra } from './ExtrasModel.tsx';

export interface IMenu {
    pizzas: IMenuItem[],
    toppings: IExtra[],
    others: IMenuItem[],
}