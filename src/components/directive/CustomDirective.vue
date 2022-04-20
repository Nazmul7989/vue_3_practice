<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>This is Custom Directive Page</h3>
<!--        Custom Directive -->

<!--        <h5 v-custom></h5>-->
<!--        <h5 v-custom="'This is global custom directive binding'"></h5>-->
<!--        <h5 v-custom></h5>-->
        <h5 v-custom="name"></h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomDirective",
  data() {
    return {
      name: 'This is local custom directive binding'
    }
  },
 directives: {
    // custom: {
    //   created(el){
    //     el.innerHTML = 'This is local custom directive'
    //   }
    // }
   custom: {
     created(el,binding){
       el.innerHTML = binding.value;
       el.style.color = 'red'

     }
   }
 }
}
</script>

<style scoped>

</style>