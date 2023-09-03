import { CategoryEnum } from "@components/enums/category.enum";

export interface IProduct {
    name: string;
    price: string;
    category: CategoryEnum;
    description: string;
    imageUrl: string;
}