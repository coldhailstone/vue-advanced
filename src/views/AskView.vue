<template>
  <div>
        <p v-for="item in ask">
            <router-link :to="`/item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>
                {{ item.time_ago }} by 
                <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        // ...mapGetters([
        //     'fetchedAsk'
        // ])
        // ...mapGetters({
        //     askItems: 'fetchedAsk'
        // })
        ...mapState({
            ask: state => state.ask
        })
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>