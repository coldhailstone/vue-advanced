<template>
  <div>
      <section>
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <div>
                        {{ userInfo.id }}
                    </div>
                    <div class="time">
                        {{ userInfo.created }}
                    </div>
                </div>
            </div>
            <h2>{{ userInfo.title }}</h2>
      </section>
      <section>
          <div v-html="userInfo.about"></div>
      </section>
  </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
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