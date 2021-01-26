import { UserInfoType, SidebarType } from "./state";
interface CommitType {
  commit: (mutations: string, params: UserInfoType | SidebarType) => void;
}
export default {
  setUserInfo: ({ commit }: CommitType, params: UserInfoType) => {
    commit("SET_USER_INFO", params);
  },
  toggleSidebar: ({ commit }: CommitType, params: SidebarType) => {
    commit("TOGGLE_SIDEBAR", params);
  }
};
