<template>
  <div>
    <h3>{{value}}</h3>
    
    <qrcode-vue :value="value" :size="size" :type="URL" level="L"></qrcode-vue>
    <v-dialog v-model="shipDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
  
           
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="shipOrg">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  </div>



</template>
<script>
  import QrcodeVue from 'qrcode.vue';
 import PostsService from "@/services/apiService";

  export default {
    data(){
     
      return {
        value: 'https://itopp.nl/trace/' + this.$route.params.orgid + '/' + this.$route.params.ownerorgid + '/' +this.$route.params.truid,
        size: 200, 
        orgs: ['ORG1','ORG2','ORG3','ORG4','ORG5','ORG6'],
        shipDialog: false,
      }
    },
    methods: {
     async shipOrg () {
      const apiResponse =  PostsService.updateTRU(this.$route.params.truid,'ReleaseFlag', this.$route.params.orgid,this.$route.params.ownerorgid );
      this.response = apiResponse;
      this.close()
     },
     
     close () {
      this.shipDialog = false
      
    },



    },

    components: {
      QrcodeVue,
    },
  }
</script> 