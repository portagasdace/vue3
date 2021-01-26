import { createStore } from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { getLocalStorage } from "@/utils/index";
export default createStore({
  modules: {},
  state: getLocalStorage("ORS_DS") || state,
  getters,
  mutations,
  actions
});
