import { IMenuItem } from "./MenuItem";

export interface ICustomizableComponent {
    className? :string;
}

export interface IFoodList extends ICustomizableComponent {
    title: string;
    foodList: IMenuItem[];
}