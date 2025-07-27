

  export interface ICart {
    id: number;
    userId: number;
    date: string; // ISO 8601 format
    products: ICartProduct[];
    __v: number;
  }
  

  interface ICartProduct {
    productId: number;
    quantity: number;
  }
  