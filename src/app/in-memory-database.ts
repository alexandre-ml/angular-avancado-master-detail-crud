import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDataBase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamentos de Contas da Casa"},
            {id: 2, name: "Saúde", description: "Plano de Saúde e Remédios"},
            {id: 3, name: "Lazer", description: "Cinema, parques, pria, etc"},
            {id: 4, name: "Salário", description: "Recebimento de Salário"},
            {id: 5, name: "Freelas", description: "Trabalhos como Freelancer"}
        ];
        
        //é objeto, então precisa das chaves no return
        //return categories; //sem chaves ele não funciona
        return {categories};
    }
}