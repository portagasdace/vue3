import { defineComponent } from "vue";
import LayoutConfig from "../constant/config";

export default defineComponent({
  setup() {
    return {};
  },
  render() {
    return (
      <div class="header">
        {LayoutConfig.isLogo ? (
          <img class="logo" src={require("../../assets/logo.png")} alt="" />
        ) : (
          <span class="logo-title" style={{ ...LayoutConfig.logoTitleStyle }}>
            {LayoutConfig.logoTitle}
          </span>
        )}
      </div>
    );
  }
});
