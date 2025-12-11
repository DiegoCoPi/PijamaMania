export class productsDTO{
    codebar:number;
    name:string;
    category:'babies' | 'children' | 'teenegers-adults';
    type: 'pijamas' | 'accesories-ladies' | 'accesories-babies';
    price:number;
    stock:number;
}