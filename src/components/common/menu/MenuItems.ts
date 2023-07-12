import { APPMODULES, ROLES } from "../../enums"
import { Menu } from "../../interfaces"

const navMenu: Record<APPMODULES, Menu> = {
  [APPMODULES.ADD_PIZZA]: {
    id: 1,
    title: APPMODULES.ADD_PIZZA,
    role: ROLES.ADMIN,
    link: "/AddPizza",
    isActive: false,
  },
  [APPMODULES.HANDBOOK]: {
    id: 2,
    title: APPMODULES.HANDBOOK,
    role: ROLES.ADMIN,
    link: "/Handbook",
    isActive: false,
  },
  [APPMODULES.MENU]: {
    id: 3,
    title: APPMODULES.MENU,
    role: ROLES.ADMIN,
    link: "/Menu",
    isActive: true,
  },
}
export default navMenu
