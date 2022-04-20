<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card px-4 py-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicComponent",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    test() {

    }
  }
}
</script>

<style scoped>

</style>