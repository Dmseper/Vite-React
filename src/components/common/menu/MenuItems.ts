import { AppModules, Roles } from "../../enums"
import { Menu } from "../../interfaces"

const navMenu: Record<AppModules, Menu> = {
  [AppModules.ADD_PIZZA]: {
    id: 1,
    title: AppModules.ADD_PIZZA,
    role: Roles.ADMIN,
    link: "/AddPizza",
    isActive: false,
  },
  [AppModules.HANDBOOK]: {
    id: 2,
    title: AppModules.HANDBOOK,
    role: Roles.ADMIN,
    link: "/Handbook",
    isActive: false,
  },
  [AppModules.MENU]: {
    id: 3,
    title: AppModules.MENU,
    role: Roles.ADMIN,
    link: "/Menu",
    isActive: true,
  },
}
export default navMenu
