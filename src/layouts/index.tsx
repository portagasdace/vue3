import { defineComponent } from "vue";
import Header from "./component/header";
import Aside from "./component/aside";

import "./index.scss";

export default defineComponent({
  setup() {
    return () => (
      <el-container class="container">
        <el-header>
          <Header />
        </el-header>
        <el-container>
          <el-aside width="200px">
            <Aside />
          </el-aside>
          <el-main>
            <el-button type="primary">主要按钮</el-button>
          </el-main>
        </el-container>
      </el-container>
    );
  }
});
