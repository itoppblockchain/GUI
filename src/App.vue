<template>
  <v-app class="white">
  <Navbar/>
 
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>

  </v-app>
</template>

<script>
//import Navbar from './components/Navbar'

export default {
  //components: { QrcodeVue},
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>
