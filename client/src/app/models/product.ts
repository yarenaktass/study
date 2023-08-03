export interface Product {
        id: number
        name: string
        description: string
        price: number
        pictureUrl: string
        type?: string
        quantityInStock?: number
        brand: string
}


export interface ProductParams {
        orderBy: string;
        searchTerm?:string;
        types:string[];
        brands: string[];
        pageNumber: number;
        pageSize:number;
}