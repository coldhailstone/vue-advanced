import ListView from './ListView.vue';

export default function createListView(name) {
    return {
        name,
        render(createElement) {
            return createElement(ListView);
        }
    }
}