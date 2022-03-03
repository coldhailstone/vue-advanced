<template>
  <div>
        <!-- <div v-for="user in $store.state.news">{{ user.title }}</div> -->
        <p v-for="item in $store.state.news">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
  </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>