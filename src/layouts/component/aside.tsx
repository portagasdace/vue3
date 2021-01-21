import { defineComponent, ref } from "vue";
import MENU_LIST, { MenuItemType } from "../constant/nav";
export default defineComponent({
  setup() {
    const activeMenu = ref("/overview");
    const isCollapse = ref(false);

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
    return (
      <div class="aside">
        <el-menu
          class="el-menu-nav"
          default-active={activeMenu}
          collapse={isCollapse}
          collapse-transition={false}
          unique-opened="unique-opened"
        >
          {MENU_LIST.map(item => {
            return item.children?.length ? (
              <el-submenu index={item.key}>
                <template>
                  <img class="nav-icon" src={processingPath(item)} />
                  <span>2</span>
                </template>
                {item.children.map((child: MenuItemType) => {
                  return (
                    <el-menu-item-group>
                      <el-menu-item title={child.name} index={child.key}>
                        <router-link to={{ path: child.path }} tag="div">
                          <span>{child.name}</span>
                        </router-link>
                      </el-menu-item>
                    </el-menu-item-group>
                  );
                })}
              </el-submenu>
            ) : (
              <el-menu-item index={item.key} title={item.name} key={item.key}>
                <router-link to={{ path: item.path }} tag="div">
                  <img class="nav-icon" src={processingPath(item)} />
                  <span>{item.name}</span>
                </router-link>
              </el-menu-item>
            );
          })}
        </el-menu>
      </div>
    );
  }
});
