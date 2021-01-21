import { defineComponent } from "vue";
import { getHomeListApi } from "./serve";
export default defineComponent({
  setup() {
    // const fetchApi = this.$http.getHomeList();
    const clickHandle = () => {
      console.log("a");
    };
    return {
      clickHandle
    };
  },
  methods: {
    async getHomeList() {
      const res = await getHomeListApi({ name: "1" });
      console.log(res);
    }
  },
  render() {
    const { clickHandle } = this;
    return (
      <div onClick={clickHandle}>
        <el-button>默认按钮</el-button>
      </div>
    );
  }
});
