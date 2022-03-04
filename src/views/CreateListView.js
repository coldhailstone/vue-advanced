import ListView from './ListView.vue';
import bus from '../utils/bus';

export default function createListView(name) {
    return {
        name,
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }, 3000);
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}