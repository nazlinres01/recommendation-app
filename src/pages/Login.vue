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
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async loginUser() {
      try {
        await this.login({ username: this.username, password: this.password });
        this.$router.push("/");
      } catch (err) {
        this.error = "Invalid username or password.";
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
}

.login input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.login button {
  width: 100%;
  padding: 0.5rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>
