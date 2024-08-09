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
    label: " My Grocery List",
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