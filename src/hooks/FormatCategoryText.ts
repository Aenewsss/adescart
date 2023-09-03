import { CategoryEnum } from "@components/enums/category.enum";

export const formatCategoryText = (category: string) => {
    switch (category) {
        case CategoryEnum.glove: return 'luvas'
        case CategoryEnum.mask: return 'máscaras'
        case CategoryEnum.medicalCap: return 'toucas'
        case CategoryEnum.syringe: return 'seringas'
        case CategoryEnum.apron: return 'aventais'
        case CategoryEnum.others: return 'outros'
        case 'default': return ''
    }
}