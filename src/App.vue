<template>
  <div class="text-center">
    <h2 class="text-success">Vue Js 3 Practice</h2>
  </div>

<!--  <SlotExample></SlotExample>-->
<!--  <SlotExample>-->
<!--    <template  v-slot:list>-->
<!--      <ul>-->
<!--        <li>Vue Js</li>-->
<!--        <li>Vuex</li>-->
<!--        <li>React Js</li>-->
<!--      </ul>-->
<!--    </template>-->
<!--    <template  #para>-->
<!--      <p>This is another slot</p>-->
<!--    </template>-->

<!--  </SlotExample>-->

<!--  Dynamic component -->
<!--  <button @click="componentToRender='Home'">Home</button>-->
<!--  <button @click="componentToRender='About'">About</button>-->
<!--  <button @click="componentToRender='Contact'">Contact</button>-->

<!--  <keepAlive>-->
<!--    <component :is="componentToRender"></component>-->
<!--  </keepAlive>-->

<!--  Props example -->
<!--  <User :name="name" @changeName="name=$event" address="Jhenaidah"></User>-->

<!--  Custom Directive-->
<!--  <CustomDirective></CustomDirective>-->

<!--  Mixins -->
  <Admin></Admin>
  <User></User>

</template>

<script>
// import SlotExample from "@/components/slot/SlotExample";
// import SlotExample from "@/components/slot/SlotExample";
// import Home from "@/components/dynamicComponent/Home";
// import About from "@/components/dynamicComponent/About";
// import User from "@/components/props/User";
// import CustomDirective from "@/components/directive/CustomDirective";
import Admin from "@/components/mixins/Admin";
import User from "@/components/mixins/User";




export default {
  name: 'App',
  data(){
    return{
      componentToRender: "Home",
      name: "Md Nazmul Hasan"

    }
  },
  components: {

    // SlotExample,
    // SlotExample,
    // Home,
    // About,
    // User,
    // CustomDirective,
    Admin,
    User,

  }
}
</script>

<style>

</style>
