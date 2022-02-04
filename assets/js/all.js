"use strict";

var url = 'https://vue3-course-api.hexschool.io/v2';
var path = 'erinhuang-lab';
"use strict";

// 串接登入 API
var loginApp = Vue.createApp({
  data: function data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login: function login() {
      axios.post("".concat(url, "/admin/signin"), this.user).then(function (res) {
        // 將 token 存在 cookie
        var _res$data = res.data,
            token = _res$data.token,
            expired = _res$data.expired;
        document.cookie = "erinToken=".concat(token, "; expires=").concat(new Date(expired), "GMT;"); // 跳轉頁面

        window.alert("".concat(res.data.message, "\uFF0C\u5373\u5C07\u9032\u5165\u5546\u54C1\u9801\u9762"));
        window.location.href;
      });
    }
  }
});
loginApp.mount('#loginApp');
//# sourceMappingURL=all.js.map
