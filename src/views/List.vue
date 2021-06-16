<template>
     
     <div>
      <v-toolbar flat color="light-blue" class="font-weight-bold">
        <v-toolbar-title>TRACEABILITY BLOCKCHAIN </v-toolbar-title> 
                <v-spacer></v-spacer>
        
        <v-btn icon large href="https://github.com/itoppblockchain" target="_blank">
          <v-icon>mdi-github-circle</v-icon>

        </v-btn>
  
        <v-btn icon large href="https://itoppblockchain.github.io/API" target="_blank">
          <v-icon>mdi-file-document</v-icon>
        </v-btn>
  
        <v-btn icon large href="https://www.dinalog.nl/project/improved-traceability-of-parts-and-producs/" target="_blank">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      <div>This prototype was developed as a part of "Improved Traceability of Parts and Products" project supported by TKI-Dinalog.</div>
      
      </v-toolbar>

   
      <v-toolbar flat color="white">
        <v-toolbar-title>Traceable Parts List</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
    
    
    <v-col cols="6" sm="6">
    <v-select v-model="selectedorg"  :items="orgs"  v-on:change= "changedOrg(selectedorg)"
  label="Connected as:" outlined> 
    </v-select>    
    </v-col>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="indigo" dark class="mb-2">Create Part</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="TRUID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.gTID" label="GTID" ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.batchNumber" label="Batch Number"></v-text-field>
                  </v-flex>
                   <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.localID" label="Local ID" ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.quantity" label="Quantity" ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.coC" label="CoC" ></v-text-field>
                  </v-flex>
                  

                </v-layout>
              </v-container>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="save">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogMaintain" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ "Maintain TRU" }}</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="TRUID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.gTID" label="GTID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.batchNumber" label="Batch Number" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.quantity" label="Quantity" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.coC" label="CoC" disabled="true"></v-text-field>
                  </v-flex>
                   <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.newcoC" label="Maintenance CoC"></v-text-field>
                  </v-flex>

                </v-layout>
              </v-container>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="closeMaintain">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="maintainTRU">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      <v-dialog v-model="dialogSplit" max-width="500px">
          
          <v-card>
            <v-card-title>
              <span class="headline">{{ "Split TRU" }}</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="TRUID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.gTID" label="GTID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.batchNumber" label="Batch Number" disabled="true"></v-text-field>
                  </v-flex>
                   <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.quantity" label="Quantity" disabled="true"></v-text-field>
                  </v-flex>
                  
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="newBatchQuantity" label="Split Bat. Quantity"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="newBatchLocalID" label="Split Bat. LocalID"></v-text-field>
                  </v-flex>

                </v-layout>
              
              </v-container>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="closeSplit">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="splitTRU">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

 

      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="TRUs"
        :items-per-page="10"
        class="elevation-1"
        item-key="name"
       
      >
      >
        
        <template slot="items" slot-scope="props" >
         
       <!--<tr v-for="{item,index} in items" :key="item.id" @click="goToTrace(index)"> -->
        
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.quantity }}</td>
          <td class="text-xs-center">{{ props.item.gTID }}</td>
          <td class="text-xs-center">{{ props.item.batchNumber}}</td>
          <!--td class="text-xs-center">{{ props.item.expiryDate}}</td> -->
          <td class="text-xs-center">{{ props.item.localID }}</td>
          <td class="text-xs-center">{{ props.item.coC }}</td>
          <!--<td class="text-xs-center">{{ props.item.owner }}</td> -->

          <td class="justify-center layout px-0">   
            


            <v-icon 
              small
              class="mr-2"
              color="blue"
              @click="splitItem(props.item)"
            >
              mdi-call-split
            </v-icon>
          
          <v-icon
              small
              class="mr-2"
              color="blue"
              @click="maintainItem(props.item)"
            >
              mdi-tools
            </v-icon> 
           
           
           <v-icon
              small
              class="mr-2"
              color="blue"
              @click="editItem(props.item)"
            >
              mdi-playlist-edit
            </v-icon>

            <v-btn icon color="white"  :to= "{name:'Trace', params: { orgid: selectedorg, ownerorgid: selectedorg, truid: props.item.name}}" >
            <v-icon to="/trace"
              small
              class="mr-2"
              color="success"
            >
              mdi-history
            </v-icon>
            </v-btn>


          <v-btn icon color="white"  :to= "{name:'QR', params: { orgid: selectedorg, ownerorgid:selectedorg, truid: props.item.name}}" >
            <v-icon 
              small
              class="mr-2"
              color="black"
            >
              mdi-qrcode
            </v-icon>
            </v-btn>

            <v-icon
              small
              color="error"
              @click="deleteItem(props.item)"
            >
              mdi-close
            </v-icon>
          </td>
          
        </template>
       
        <template slot="no-data">
          <v-btn color="primary" @click="queryAll">Reset</v-btn>
        </template>
      </v-data-table>
      </div>
</template>



<script>

import PostsService from "@/services/apiService";
//import router from '@/router'
//import QrCodeVue from 'qrcode.vue'


export default{
name: "response",
 data: () => ({
    dialog: false,
    response: {}, 
    headers: [
      {
        text: 'Part ID',
        align: 'left',
        sortable: true,
        value: 'PartName',
        width: 100,
      },
      { text: 'Quantity', value: 'quantity', align: 'center',width: 200},
      { text: 'GTID', value: 'gTID', align: 'center', width: 200},
      { text: 'Batch Number', value: 'batchNumber',align: 'center',width:200 },
      { text: 'Local ID', value: 'localID',align: 'center',width:200 },
      { text: 'CoC', value: 'coC',align: 'right',width:200 },

      //{ text: 'Actions', value: 'name', align: 'right',sortable: false,width:200 }
    ],
    orgs: ['ORG1','ORG2','ORG3','ORG4','ORG5','ORG6'],
    TRUs: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      quantity: '20',
      gTID: 'H0W98',
      batchNumber: '',
      coC: '',
      newcoC:'',
      owner:'',
      localID:'NA',
      paymentPeriod:'30',
    },
    defaultItem: {
      name: '',
      quantity: '0',
      gTID: '',
      batchNumber: '',
      coC: '',
      newcoC:'',
      owner:'',
    },
  }),
  components: {
    //VueInstantLoadingSpinner
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New TRU' : 'Update TRU'
    
    
    },
    //clickRow(){
    //const selectedRow = this.selected[0];
    //router.push({ path: 'trace', query: { orgid: 'ORG1', truid: 'TRU1' }})
    //return selectedRow ? `${selectedRow.owner} ${selectedRow.lastName}` : "no data selected";
   // },
  },

  watch: {
    dialog (val) {
      val || this.close()
    }

  },

  created () {
    if (this.$route.params.orgid == null) { this.selectedorg = "ORG1"}
    if (this.$route.params.orgid != null) { this.selectedorg = this.$route.params.orgid}
    this.queryAll()
  },

  methods: {
   async queryAll() {
      this.response = null;
      const apiResponse = await PostsService.queryAllTRU();
      //let TRUs = [];
      var i=0;
      for (i=0; i < apiResponse.data.length; i++) {
         

         this.TRUs.push({ name : apiResponse.data[i].Record.TRUID,
                        quantity: apiResponse.data[i].Record.Quantity,
                        gTID: apiResponse.data[i].Record.GTIN,
                        batchNumber: apiResponse.data[i].Record.BatchNumber,
                        owner: apiResponse.data[i].Record.Owner,
                        localID: apiResponse.data[i].Record.LocalID,
                        coC: apiResponse.data[i].Record.CoCID});
                        }
    },
  
    async editItem (item) {
      this.editedIndex = this.TRUs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

     async maintainItem (item) {
      this.editedIndex = this.TRUs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogMaintain = true
    },
    
    async splitItem (item) {
      this.editedIndex = this.TRUs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogSplit = true
    },

    deleteItem (item) {
      const index = this.TRUs.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.TRUs.splice(index, 1)
    },

    async splitTRU (item) {
      
      
        Object.assign(this.TRUs[this.editedIndex], this.editedItem);
        const apiResponse = PostsService.splitTRU(this.editedItem.name,this.newBatchQuantity, this.newBatchLocalID, this.selectedorg);
        this.response = apiResponse;
        this.closeSplit()

    },

    async maintainTRU (item) {
      
        
        Object.assign(this.TRUs[this.editedIndex], this.editedItem)
        this.editedItem.coC = this.editedItem.coC + '/' + this.editedItem.newcoC;
        const apiResponse = PostsService.updateTRU(this.editedItem.name,'CoC',this.editedItem.coC,this.selectedorg);
        this.response = apiResponse;
        this.closeMaintain();
    },

    closeSplit () {
      this.dialogSplit = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    closeMaintain () {
      this.dialogMaintain = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    async sendTRU (item) {
       this.dialogQR = true
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    


    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.TRUs[this.editedIndex], this.editedItem)
        const apiResponse = PostsService.updateTRU(this.editedItem.name,'LocalID',this.editedItem.localID,this.selectedorg);
        this.response = apiResponse;
      } else {
        this.response = null;
        const apiResponse = PostsService.createTRU(this.editedItem.gTID,this.editedItem.quantity, this.editedItem.batchNumber, this.editedItem.localID, this.editedItem.localID, this.editedItem.coC,this.editedItem.paymentPeriod,this.selectedorg);
        this.response = apiResponse;
      }
      
      this.close()

    },

    changedOrg(selected) {
    this.$router.push({name: 'listParts', params: { orgid: selected }})

    },
  
  async createTRU(){
        this.response = null;
        const apiResponse = PostsService.createTRU(this.editedItem.gTID,this.editedItem.batchNumber,this.editedItem.coC);
        this.response = apiResponse;
        this.window.location.reload;

  },
},
}
</script>