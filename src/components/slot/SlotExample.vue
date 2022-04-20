<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <slot name="list"></slot>
        <h3>This is Slot Example</h3>
        <slot name="para"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlotExample",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    test() {

    }
  },


}
</script>

<style scoped>

</style>