import overviewIcon from "@/assets/img/aside/icon_overview.png";
import overviewChooseIcon from "@/assets/img/aside/icon_overview-choose.png";
import platformIcon from "@/assets/img/aside/icon_platform.png";
import platformChooseIcon from "@/assets/img/aside/icon_platform-choose.png";
import audienceIcon from "@/assets/img/aside/icon_audience.png";
import audienceChooseIcon from "@/assets/img/aside/icon_audience-choose.png";

export interface IconType {
  default: string;
  choose: string;
}
export interface MenuItemType {
  name: string;
  key: string;
  path?: string;
  icon?: IconType;
  children?: MenuItemType[];
}

export default {
  asideWidth: "200px",
  asideTextColor: "#999",
  asideActiveTextColor: "#113090",
  isLogo: false,
  logoTitle: "OTT Ratings System | OTT收视系统",
  logoTitleStyle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#113192"
  },
  MENU_LIST: [
    {
      name: "整体概览",
      key: "/overview",
      icon: {
        default: overviewIcon,
        choose: overviewChooseIcon
      },
      path: "/overview"
    },
    {
      name: "观众分析",
      key: "audience",
      icon: {
        default: audienceIcon,
        choose: audienceChooseIcon
      },
      children: [
        {
          name: "节目榜单",
          key: "/audience-program",
          path: "/audience-program"
        }
      ]
    },
    {
      name: "平台分析",
      key: "platform",
      icon: {
        default: platformIcon,
        choose: platformChooseIcon
      },
      children: [
        {
          name: "节目榜单",
          key: "/platform-program",
          path: "/platform-program"
        }
      ]
    }
  ]
};
