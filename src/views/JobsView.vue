<template>
    <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';

export default {
    components: {
        ListItem
    },
    created() {
        bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('FETCH_JOBS')
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch((err) => {
                    console.error(err);
                });
        }, 3000);
    }
}
</script>