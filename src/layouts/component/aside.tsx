import { defineComponent, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import MENU_LIST, { MenuItemType } from "../constant/nav";

import LayoutConfig from "../constant/config";

export default defineComponent({
  setup() {
    const route = useRoute();
    const activeMenu = ref(route.path);
    const isCollapse = ref(false);
    onBeforeRouteUpdate(to => {
      activeMenu.value = to.path;
    });
    return {
      activeMenu,
      isCollapse
    };
  },
  methods: {
    processingPath({ key, icon }: MenuItemType) {
      const { activeMenu } = this;
      if (activeMenu === key) {
        return icon?.choose;
      }
      return icon?.default;
    }
  },
  render() {
    const { activeMenu, isCollapse, processingPath } = this;
    // 多级菜单
    const renderSubMenu = (item: MenuItemType) => {
      return (
        <el-submenu index={item.key}>
          {{
            title: () => {
              return (
                <>
                  <img class="nav-icon" src={processingPath(item)} />
                  <span class={activeMenu.includes(item.key) ? "isActive" : ""}>
                    {item.name}
                  </span>
                </>
              );
            },
            default: () =>
              item.children?.map((child: MenuItemType) => {
                return (
                  <el-menu-item-group>
                    <el-menu-item title={child.name} index={child.key}>
                      <router-link to={{ path: child.path }} tag="div">
                        <span>{child.name}</span>
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                );
              })
          }}
        </el-submenu>
      );
    };
    // 一级菜单
    const renderMenuItem = (item: MenuItemType) => {
      return (
        <el-menu-item index={item.key} title={item.name} key={item.key}>
          <router-link to={{ path: item.path }} tag="div">
            <img class="nav-icon" src={processingPath(item)} />
            <span>{item.name}</span>
          </router-link>
        </el-menu-item>
      );
    };
    return (
      <div class="aside">
        <el-menu
          class="el-menu-nav"
          default-active={activeMenu}
          collapse={isCollapse}
          collapse-transition={false}
          text-color={LayoutConfig.asideTextColor}
          active-text-color={LayoutConfig.asideActiveTextColor}
        >
          {MENU_LIST.map(item => {
            return item.children?.length
              ? renderSubMenu(item)
              : renderMenuItem(item);
          })}
        </el-menu>
      </div>
    );
  }
});
