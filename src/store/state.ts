export interface UserInfoType {
  isAutoLogin: boolean;
  isLogin: boolean;
  isShowModal: boolean;
  userName: string;
  name: string;
  token: string;
}
export interface SidebarType {
  isCollapse: boolean;
}
export interface StateType {
  userInfo: UserInfoType;
  sidebar: SidebarType;
}

export default {
  // 用户的登陆信息和token
  userInfo: {
    isAutoLogin: false,
    isLogin: false,
    isShowModal: false,
    userName: "",
    name: "",
    token: ""
  },
  sidebar: {
    isCollapse: false // true 收起  false 展开
  }
};
