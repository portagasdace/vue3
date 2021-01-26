import { computed, defineComponent, onMounted, reactive, ref } from "vue";

import { UseLogin } from "../hook";

import "../index.scss";

import { useStore, mapActions } from "vuex";
import { useRouter } from "vue-router";
import actions from "@/store/actions";

export default defineComponent({
  setup() {
    const store = useStore();
    const { setUserInfo } = actions;
    const form = reactive({
      user_name: "",
      password: "",
      autoLogin: false
    });
    const loginSpan = ref("");
    const rememberPassword = ref(false);

    // 记住密码
    const checkedChange = (val: boolean) => {
      form.autoLogin = val;
      rememberPassword.value = val;
    };

    // 如果记住密码自动添加账号密码
    onMounted(() => {
      const { user_name, password, isAutoLogin } = store.state.userInfo;
      if (isAutoLogin) {
        form.user_name = user_name;
        form.password = password;
        form.autoLogin = true;
        rememberPassword.value = true;
      }
    });

    // 登录
    const submitClickHandle = async () => {
      const router = useRouter();
      const { user_info, login_span } = UseLogin(form);
      // setUserInfo("SET_USER_INFO", user_info);
      // loginSpan.value = login_span;
      // router.push("/overview");
    };
    return {
      form,
      loginSpan,
      rememberPassword,
      checkedChange,
      submitClickHandle
    };
  },
  render() {
    const {
      form,
      rememberPassword,
      loginSpan,
      checkedChange,
      submitClickHandle
    } = this;

    // 头部
    const RenderHeader = () => {
      return (
        <header id="header">
          <div>
            <section class="header-logo">
              <img src={require("@/assets/img/login/logo.png")} />
            </section>
            {/* <nav>
              <ul>
                <li>
                  <router-link class="business" to={{ path: "/consulting" }}>
                    商务合作
                  </router-link>
                </li>
                <li class="vertical-line"></li>
                <li>
                  <router-link class="colorF" to={{ path: "/login" }}>
                    登录
                  </router-link>
                </li>
              </ul>
            </nav> */}
          </div>
        </header>
      );
    };
    // 主体
    const RenderMain = () => {
      return (
        <section id="login">
          <div class="login-cont">
            <h1>用户登录</h1>
            <el-input
              class="input"
              placeholder="请输入用户名"
              v-model={form.user_name}
            ></el-input>
            <el-input
              class="input"
              type="password"
              placeholder="请输入密码"
              v-model={form.password}
            ></el-input>
            <el-row>
              <el-col span={24}>
                <el-checkbox
                  style="float: left;margin-top: 20px;color:#999;margin-bottom: 5px;"
                  v-model={rememberPassword}
                  onChange={checkedChange}
                >
                  记住密码
                </el-checkbox>
              </el-col>
            </el-row>
            <el-button
              class="login__btn"
              type="primary"
              onClick={submitClickHandle}
            >
              登录
            </el-button>
            <span class="login--error">{loginSpan}</span>
          </div>
        </section>
      );
    };
    return (
      <div id="login">
        <RenderHeader />
        <RenderMain />
      </div>
    );
  }
});
