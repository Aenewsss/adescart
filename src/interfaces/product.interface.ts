import { CategoryEnum } from "@components/enums/category.enum";

export interface IProduct {
    _id?:string;
    name: string;
    price: string;
    category: CategoryEnum;
    description: string;
    imageUrl: string;
}