<template>
  <div>
      <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        fetchNewsList()
            .then(response => this.users = response.data)
            .catch(console.error);
    }
}
</script>

<style>

</style>