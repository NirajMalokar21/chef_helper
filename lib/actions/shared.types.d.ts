export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface addShopListParams{
  clerkId: string | null;
  title: string;
  description: string;
  ingredients?: {
    ingredient: string;
    owned: boolean;
  };
}
  
export interface UpdateIngredientsParams {
  id: string;
  ingredients: Ingredient[];
}
  
export interface Ingredient {
  name: string,
  quantity: string | null
  owned: boolean
}
