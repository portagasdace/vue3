import { StateType, UserInfoType } from "./state";
import { setLocalStorage } from "@/utils/index";
export default {
  // 设置登陆信息
  SET_USER_INFO(state: StateType, params: UserInfoType) {
    Object.assign(state.userInfo, params);
    setLocalStorage("ORS_DS", { userInfo: params } as any);
  },
  TOGGLE_SIDEBAR(state: StateType) {
    const { sidebar } = state;
    const isCollapse = sidebar.isCollapse;
    state.sidebar.isCollapse = !isCollapse;
  }
};
