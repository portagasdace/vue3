import { defineComponent } from "vue";
import Header from "./component/header";
import Aside from "./component/aside";
import LayoutConfig from "../../config/layout";

import "./index.scss";

export default defineComponent({
  setup() {
    return () => (
      <el-container class="container">
        <el-header>
          <Header />
        </el-header>
        <el-container>
          <el-aside width={LayoutConfig.asideWidth}>
            <Aside />
          </el-aside>
          <el-main>
            <div class="main-content">
              <router-view />
            </div>
          </el-main>
        </el-container>
      </el-container>
    );
  }
});
