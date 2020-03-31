export class Product {

   
        type:number;
        id: string;
        name: string;
        price: number;
        photo: string;
        photo1:string;
    
        constructor(id, name, price=0, photo, photo1)
        {
            this.id=id;
            this.name=name;
            this.price=price;
            this.photo=photo;
            this.photo1=photo1;
        }

    

}
