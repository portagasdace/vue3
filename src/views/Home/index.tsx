import { defineComponent } from "vue";
import config from "../../../config/index"; // 路径配置
export default defineComponent({
  setup() {
    console.log(config.baseURL);
    return () => <div class="Home">Home</div>;
  }
});
