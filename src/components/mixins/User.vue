<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>User Panel</h3>
        <ul v-for="mobile in mobiles" :key="mobile.index">
          <li>{{ mobile }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import {mixin} from "@/components/mixins/MixinsExample";

export default {
  name: "User",
  data() {
    return {
      name: ''
    }
  },
  mixins : [mixin],


}
</script>

<style scoped>

</style>