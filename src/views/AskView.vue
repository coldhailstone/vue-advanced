<template>
    <list-item></list-item>

    <!-- <div>
        <ul class="news-list">
            <li v-for="item in ask" class="post">
                <div class="points">
                    {{ item.points }}    
                </div>
                <div>
                    <p class="news-title">
                        <router-link :to="`/item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div> -->
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { mapState, mapGetters } from 'vuex';

export default {
    components: {
        ListItem
    },
    computed: {
        // ...mapGetters([
        //     'fetchedAsk'
        // ])
        // ...mapGetters({
        //     askItems: 'fetchedAsk'
        // })
        // ...mapState({
        //     ask: state => state.ask
        // })
    }
}
</script>