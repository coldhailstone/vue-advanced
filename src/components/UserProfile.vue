<template>
  <div>
      <section>
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <!-- <router-link :to="`/user/${fetchedItem.user}`">
                        {{ fetchedItem.user }}
                    </router-link>
                    <div class="time">
                        {{ fetchedItem.time_ago }}
                    </div> -->
                </div>
            </div>
            <!-- <h2>{{ fetchedItem.title }}</h2> -->
      </section>
      <section>
          <!-- <div v-html="fetchedItem.content"></div> -->
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
.fa-user {
    font-size: 2.5rem;
}
</style>