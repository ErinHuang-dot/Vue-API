// 串接登入 API
const loginApp = Vue.createApp ({
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        }
    },
  
    methods: {
        login () {
            axios.post(`${url}/admin/signin`, this.user)
            .then((res) => {
                // 將 token 存在 cookie
                const { token, expired } = res.data;
                document.cookie = `erinToken=${token}; expires=${new Date(expired)}GMT;`;
                // 跳轉頁面
                window.alert(`${res.data.message}，即將進入商品頁面`);
                window.location.href
            })
        }
    }
  
  })
  
  loginApp.mount('#loginApp');