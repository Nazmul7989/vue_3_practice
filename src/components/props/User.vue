<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>This is User Page</h3>
        <h4>My Name is {{ name }}</h4>
        <h4>I live in {{ address }}</h4>
        <button @click="changeName">Change Name</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {

    }
  },
  props: {
    name: String,
    address: String,
  },
  methods: {
    changeName() {
      this.$emit('changeName','Md Mizanur Rahman')
    }
  },
  components: {},

  mounted() {

  },
  created() {

  },
}
</script>

<style scoped>

</style>