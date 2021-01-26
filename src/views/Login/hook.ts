import Serve from "./serve";
export const UseLogin = (form: any) => {
  let res: any = null;
  let loginSpan = "";
  const login_time = new Date().getTime();
  const { user_name, password } = form;
  res = Serve.LoginApi({
    user_name,
    password
  })
    .then((res: any) => {
      const { data } = res;
      if (res.code === 200) {
        if (res.data.status === "ok") {
          if (form.autoLogin) {
            data.password = form.password;
          }
          loginSpan = "";
        }
      } else {
        loginSpan = data.status ? `*${data.status}` : "";
      }
    })
    .catch(err => console.log(err));

  return {
    user_info: Object.assign({}, res.data, {
      login_time,
      isAutoLogin: form.autoLogin,
      isLogin: true,
      isShowModal: true
    }),
    login_span: loginSpan
  };
};
