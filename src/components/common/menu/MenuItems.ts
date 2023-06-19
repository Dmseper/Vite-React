
import {Roles, AppModules} from "../../enums";
import {Menu} from "../../interfaces";

const navMenu: Record<AppModules, Menu> = {
  [AppModules.ADD_PIZZA]: {
    id: 1,
    title :AppModules.ADD_PIZZA,
    role: Roles.ADMIN,
    link: "/AddPizza",
    isActive: false
  },

}
export default navMenu





