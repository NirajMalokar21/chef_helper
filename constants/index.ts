export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

interface SidebarLink {
  imgURL: string,
  route: string,
  label: string
}

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/list.svg",
    route: "/shop-list",
    label: "Grocery List",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/top-chefs",
    label: "Top Chefs",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/ai-help",
    label: "AI Help",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/categories",
    label: "Categories",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: " My Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/post-recipe",
    label: "Post a Recipe",
  },
];

export const topRecipes = [
  {
    id: 1,
    imgURL: '/images/chickenRec.jpeg',
    title: 'Spicy Fried Chicken',
    tags: ['Chicken', 'Spicy', 'Fried']
  },
  {
    id: 2,
    imgURL: '/images/chickenRec.jpeg',
    title: 'Spicy Fried Chicken',
    tags: ['Chicken', 'Spicy', 'Fried']
  },
  {
    id: 3,
    imgURL: '/images/chickenRec.jpeg',
    title: 'Spicy Fried Chicken',
    tags: ['Chicken', 'Spicy', 'Fried']
  },
  {
    id: 4,
    imgURL: '/images/chickenRec.jpeg',
    title: 'Spicy Fried Chicken',
    tags: ['Chicken', 'Spicy', 'Fried']
  },
]

export const features = [
  {
    id: 1,
    imgUrl: '/assets/icons/suitcase.svg',
    title: 'AI Help Tools',
    description: 'Discover the power of AI in your kitchen with tools that generate recipes based on your preferences and suggest meals tailored to the ingredients you have on hand. Effortlessly plan your meals and explore new culinary possibilities.',
  },
  {
    id: 2,
    imgUrl: '/assets/icons/users.svg',
    title: 'Chef Communnity',
    description: 'Connect with fellow chefs and food enthusiasts in a vibrant community. Share tips, exchange recipes, and get inspired by others’ culinary creations to elevate your cooking skills and enjoy a shared passion for food.',
  },
  {
    id: 3,
    imgUrl: '/assets/icons/list.svg',
    title: 'Grocery List',
    description: 'Streamline your shopping with a convenient grocery list feature. Easily import ingredients directly from recipes, track what you need to buy, and organize items by category. Ensure you never forget a crucial ingredient and simplify your grocery trips.',
  },
  {
    id: 4,
    imgUrl: '/assets/icons/question.svg',
    title: 'Post Recipes',
    description: 'Share your favorite recipes with the community and inspire others with your culinary creations. Upload and showcase your dishes, complete with detailed instructions, ingredients, and personal touches to engage and help fellow food lovers.',
  },
]