<template>
    <div class="login">
      <h1>Login to Your Account</h1>
      <form @submit.prevent="loginUser">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div> <!-- Hata mesajı -->
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    name: "UserLogin",  // Bileşen ismi çok kelimeli hale getirildi
    data() {
      return {
        username: "",  // Kullanıcı adı
        password: "",  // Şifre
        error: null,   // Hata mesajı
      };
    },
    methods: {
      ...mapActions("auth", ["login"]),  // Vuex aksiyonunu kullanarak giriş işlemi
      async loginUser() {
        try {
          await this.login({ username: this.username, password: this.password });
          this.$router.push("/");  // Başarılı giriş sonrası ana sayfaya yönlendirme
        } catch (err) {
          this.error = "Invalid username or password.";  // Hata mesajı
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .login h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .login input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .login button {
    width: 100%;
    padding: 0.75rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login button:hover {
    background-color: #555;
  }
  
  .error {
    color: red;
    text-align: center;
    margin-top: 1rem;
  }
  </style>
  