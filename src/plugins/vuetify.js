import Vue from 'vue'
import Vuetify,{VToolbar, VIcon,VCol,} from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
    theme: {
    primary: '#9652ff',
    success: '#3cd1c2',
    info: '#ffaa2c',
    error: '#f83e70'
  }
})

//Vue.use(Vuetify)

//export default new Vuetify({
// icons: {
//   iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
//  },
//})