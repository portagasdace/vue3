/*
 * @Description:
 * @Author: 刘玉生
 * @Date: 2019-10-16 11:15:39
 * @LastEditTime: 2019-11-28 10:41:08
 * @LastEditors: 刘玉生
 */
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
export default [
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
    key: "/audience",
    icon: {
      default: audienceIcon,
      choose: audienceChooseIcon
    },
    children: [
      {
        name: "观众分析-1",
        key: "/audiences",
        path: "/a"
      }
    ]
  },
  {
    name: "平台分析",
    key: "/platform",
    icon: {
      default: platformIcon,
      choose: platformChooseIcon
    },
    path: "/platform",
    children: [
      {
        name: "平台分析-1",
        key: "/audience-1",
        path: "/b"
      }
    ]
  }
];
