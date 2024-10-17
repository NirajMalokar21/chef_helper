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
  
  