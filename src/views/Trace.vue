<template>
  <div>
    <v-container style="max-width: 950px;">
      
      <v-dialog v-model="dialog"  max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ "Update TRU" }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  
                   <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Part ID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.gTID" label="GTID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.localID" label="Local ID"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.quantity" label="Quantity" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.coC" label="CoC" disabled="true" ></v-text-field>
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
                    <v-text-field v-model="editedItem.name" label="Part ID" disabled="true"></v-text-field>
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
                    <v-text-field v-model="editedItem.newBatchQuantity" label="Split Bat. Quantity"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.newBatchLocalID" label="Split Bat. Local ID"></v-text-field>
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

<v-dialog v-model="dialogReceive" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ "Get Ownership of TRU" }}</span>
            </v-card-title>
            <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
              <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Part ID" disabled="true"></v-text-field>
              </v-flex>
               <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.quantity" label="Quantity" disabled="true"></v-text-field>
               </v-flex>
               <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.paymentPeriod" label="Payment Period" disabled="true"></v-text-field>
               </v-flex>


            <v-card-text>
             You are approving the ownership of the TRU. The payment should completed in the payment period.
            </v-card-text>
          </v-layout>
              
        </v-container>
       </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="closeReceive">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="receiveTRU">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  <v-dialog v-model="shipDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                <v-select v-model="editedItem.shiporg1"  :items="orgs"   label="Ship to:" outlined> </v-select>   
                </v-layout>
              </v-container>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="closeShip">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="shipOrg">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> 

        <v-dialog v-model="dialogDispute" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Part ID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.gTID" label="GTID" disabled="true"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.disputeType" label="Dispute Type"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.disputeInformation" label="Dispute Information"></v-text-field>
                  </v-flex>
                 <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.counterParty" label="Counter Party"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="closeDispute">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="createDispute">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>   
      <v-timeline>
        <v-timeline-item
          class="white--text mb-12"
          color="blue"
        >
          <template v-slot:icon>
            <span>M</span>
          </template>
          <v-text-field
            v-model="input"
            hide-details
            flat
            label="Send trace via email"
            solo
            @keydown.enter="comment"
          >
            <template v-slot:append>
              <v-btn
                class="mx-0"
                depressed
                @click="comment"             
                >Send
              </v-btn>  
            </template >
          </v-text-field>
   <v-card
          color="green"
          dark
        >
          <v-card-title class="title">{{editedItem.name}}</v-card-title>
          <v-card-text class="white text--primary">
            <p>Quantity: {{editedItem.quantity}} </p>
            <p>GTIN: {{editedItem.gTID}} </p>
            <p>Batch Number: {{editedItem.batchNumber}} </p>
            <p>Local ID: {{editedItem.localID}} </p>
            <p>CoC: {{editedItem.coC}} </p>
            <p>Payment Period: {{editedItem.paymentPeriod}} </p>


          <v-btn v-if="owned" slot class="mx-2" fab dark  small color="light-green"  :to= "{name:'QR', params: { orgid: editedItem.org, ownerorgid: editedItem.ownerorg, truid: editedItem.name}}" >
            <v-icon  class="mr-2" color="black"> mdi-qrcode</v-icon>
          </v-btn>  
          <v-btn v-if="owned" slot="activator" class="mx-2" fab dark small color="light-green" @click="editItem()"><v-icon class="mr-2" color="black">mdi-playlist-edit</v-icon></v-btn>
          
          <v-btn v-if="owned" slot="activator" class="mx-2" fab dark small color="light-green" @click="maintainItem()"> 
            <v-icon  class="mr-2" color="black">mdi-tools</v-icon>
          </v-btn>
          <v-btn v-if="released" slot="activator" class="mx-2" fab dark small color="light-green" @click="receiveItem()"> 
            <v-icon  class="mr-2" color="black">mdi-exit-to-app</v-icon>
            </v-btn>
          <v-btn v-if="owned" slot="activator" class="mx-2" fab dark small color="light-green" @click="splitItem()"><v-icon class="mr-2" color="black">mdi-call-split</v-icon></v-btn>

          <v-btn v-if="owned" slot="activator" class="mx-2" fab dark small color="light-green" @click="shipItem()"> 
            <v-icon  class="mr-2" color="black">mdi-export</v-icon>
          </v-btn>

           <v-btn v-if="owned" slot="activator" class="mx-2" fab dark small color="orange" @click="disputeItem()"> 
            <v-icon  class="mr-2" color="black">mdi-exclamation-thick</v-icon>
          </v-btn>
          
          </v-card-text>
        </v-card>
     </v-timeline-item>
 <v-slide-x-transition
          group
        >

         <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4"
            :color="event.color"
            :icon="event.icon"
            fill-dot
          
          >
           <template v-slot:opposite>
           <span
            :class="`headline  --text`"
            v-text="event.time"
           ></span>
           </template>
            
           
            <div>
            <v-row justify="space-between">
              
              <v-col class="text-right" cols="5" v-text="event.text"></v-col> 
            </v-row>
           </div>

            <div>
            <v-row justify="space-between">
              
              <v-col class="text-right" cols="5" v-text="event.issues"></v-col> 
            </v-row>
           </div>
   

          </v-timeline-item>
  </v-slide-x-transition>


      </v-timeline>
    </v-container>
</div>
</template>

<script>

import PostsService from "@/services/apiService";

export default{
 data: () => ({
    events: [],
    input: null,
    nonce: 0,
    dialog: false,
    dialogSplit: false,
    dialogReceive: false,
    dialogSend: false,
    shipDialog: false,
    dialogDispute: false,
    dialogMaintain: false,
    orgs: ['ORG1','ORG2','ORG3','ORG4','ORG5','ORG6'],
    released: false,
    owned: false,
    editedItem: {
      name: 'wert',
      org: '\u25F4',
      ownerorg: '\u25F4',
      quantity: '\u25F4',
      gTID: '\u25F4',
      batchNumber: '\u25F4',
      localID: '\u25F4',
      coC: '\u25F4',
      newBatchQuantity: '0',
      newcoC: '',
      shiporg1: '\u25F4',
      releaseFlag: '\u25F4',
      disputeType: '',
      disputeInformation: '',
      counterParty: '',
      paymentPeriod: '',
    },
    defaultItem: {
      name: '',
      org: '',
      quantity: '0',
      gTID: '',
      batchNumber: '',
      coC: '',
    },
    
  }),

   watch: {
    dialog (val) {
      val || this.close()
    },
    dialogSplit (val) {
      val || this.close()
    },
     dialogReceive (val) {
      val || this.close()
    },
     dialogSend (val) {
      val || this.close()
    },
     dialogDispute (val) {
      val || this.close()
    }
  },

  computed: {
    timeline () {
      return this.events.slice().reverse()
    },
  },

  created () {
    let orgid = this.$route.params.orgid;
    let ownerorgid = this.$route.params.ownerorgid;
    let truid = this.$route.params.truid;
    if (orgid == ownerorgid) {this.owned = true};
    this.queryTRU(orgid, ownerorgid, truid);
    this.queryT(ownerorgid,truid);
  },

  methods:  {
    async queryTRU(orgid,ownerorgid,truid){
        this.response = null;
        this.editedItem.ownerorg = ownerorgid;
        this.editedItem.org = orgid;

        this.editedItem.name = truid;
        let var1 = truid;
        const apiResponse = await PostsService.queryTRU(var1);
        
        //this.editedItem.name = apiResponse.data.TRUID;
        this.editedItem.quantity = apiResponse.data.Quantity;
        this.editedItem.gTID= apiResponse.data.GTIN;
        this.editedItem.batchNumber = apiResponse.data.BatchNumber;
        this.editedItem.coC = apiResponse.data.CoCID; 
        this.editedItem.releaseFlag = apiResponse.data.ReleaseFlag;
        this.editedItem.localID = apiResponse.data.LocalID;
        this.editedItem.owner = apiResponse.data.Owner;
        this.editedItem.paymentPeriod = apiResponse.data.PaymentPeriod;

        if (this.editedItem.org == this.editedItem.releaseFlag) {this.released = true};
        //if (this.editedItem.owner== this.editedItem.org) {this.owned = true};


    },

 

    async queryT(ownerorgid, truid) {
      const time = (new Date()).toTimeString()

       this.response = null;
       let var1 = ownerorgid;
       let var2 = truid;
       //let var1 = this.editedItem.gTID;
       //let var2 = this.editedItem.batchNumber;
       const apiResponse = await PostsService.queryTRACE(var1,var2);
       //var i=0;
       var j=0;
       
       for (j=0; j < apiResponse.data.length; j++) {
         
         var TraceText="";
         if ((apiResponse.data[j].Record.EventType == "Produce") || (apiResponse.data[j].Record.EventType =="1")) {TraceText = "Part with "+ apiResponse.data[j].Record.TraceTRUID +" is produced by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". CoC:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="Batch") {TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" BATCH NUMBER is updated by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Previous batch number:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="CoC" ){TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" COC is updated by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Data:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="ExpiryDate" ){TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" EXPIRY DATE is updated " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Data:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="Quantity Update" ){TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" QUANTITY is updated" + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Data:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="Order" ){TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" is ORDERED by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Data:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="Ship" ){TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" is SHIPPED from " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Shipped to:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="Split-Original" ){TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" is SPLIT by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Split TRU ID: TRU"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="Split-New" ){TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" is SPLIT by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Split TRU ID:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="Ownership" ) {TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +" is OWNED by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Previous owner:"+ apiResponse.data[j].Record.EventID}
         else if (apiResponse.data[j].Record.EventType =="LocalID" ) {TraceText = "Part "+ apiResponse.data[j].Record.TraceTRUID +"local ID by " + apiResponse.data[j].Record.TraceOwnerOrgID  + ". Previous local ID:"+ apiResponse.data[j].Record.EventID}



         this.events.push({ id : this.nonce++,
                        text: TraceText, 
                        time: apiResponse.data[j].Record.Date,
                        icon: "mdi-check",
                        color: "green",
                        issues: "example issue"},
                        )
                        //time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
                        //return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          } 
        },
    
    comment () {
      const time = (new Date()).toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        }),
      })

      this.input = null
    },
    
    
    
     //const apiResponse = await PostsService.queryTRU(this.truid);
        
       // this.editedItem.name = apiResponse.TRUID;
        //this.editedItem.quantity = apiResponse.Quantity;
        //this.editedItem.gTID= apiResponse.GTIN;
        //this.editedItem.batchNumber = apiResponse.BatchNumber;
        //this.editedItem.coC = apiResponse.CoCID;
    
editItem () {
        
        this.dialog = true
    
    },

splitItem () {
     
      this.dialogSplit = true
    },

maintainItem () {
     
      this.dialogMaintain = true
    },

receiveItem () {
     
      this.dialogReceive = true
    },

  shipItem () {
     
      this.shipDialog = true
    },

disputeItem () {
     
      this.dialogDispute = true
    },

  async save () {
      
      //Object.assign(this.TRUs[this.editedIndex], this.editedItem)
      const apiResponse = PostsService.updateTRU(this.editedItem.name,'LocalID',this.editedItem.localID,this.editedItem.org);
      this.response = apiResponse;
      this.close();
      this.$router.push({name: 'Trace', params: {orgid: this.editedItem.org, ownerorgid: this.editedItem.ownerorg, truid: this.editedItem.name }});


    },
 async receiveTRU () {
      
      //Object.assign(this.TRUs[this.editedIndex], this.editedItem);
      const apiResponse = PostsService.changeOWN(this.editedItem.ownerorg, this.editedItem.name, this.editedItem.org);
      this.response = apiResponse;
      this.closeReceive();
      this.$router.push({name: 'Trace', params: {orgid: this.editedItem.org, ownerorgid: this.editedItem.org, truid: this.editedItem.name }});

    },



  async splitTRU () {
      
      //Object.assign(this.TRUs[this.editedIndex], this.editedItem);
      const apiResponse = PostsService.splitTRU(this.editedItem.name,this.editedItem.newBatchQuantity,this.editedItem.newBatchLocalID, this.editedItem.org);
      this.response = apiResponse;
      this.closeSplit();
      this.$router.push({name: 'Trace', params: {orgid: this.editedItem.org, ownerorgid: this.editedItem.org, truid: this.editedItem.name }});


    },
 async maintainTRU (item) {
      
        
        //Object.assign(this.TRUs[this.editedIndex], this.editedItem)
        this.editedItem.coC = this.editedItem.coC + '/' + this.editedItem.newcoC;
        const apiResponse = PostsService.updateTRU(this.editedItem.name,'CoC',this.editedItem.coC,this.editedItem.org);
        this.response = apiResponse;
        this.closeMaintain();
        this.$router.push({name: 'Trace', params: {orgid: this.editedItem.org, ownerorgid: this.editedItem.org, truid: this.editedItem.name }});

    },

async createDisputeTRU (item) {
      
        
        //Object.assign(this.TRUs[this.editedIndex], this.editedItem)
        this.editedItem.coC = this.editedItem.coC + '/' + this.editedItem.newcoC;
        const apiResponse = PostsService.createDisputeTRU(this.editedItem.name,'CoC',this.editedItem.coC,this.editedItem.org);
        this.response = apiResponse;
        this.closeDispute();
        this.$router.push({name: 'Trace', params: {orgid: this.editedItem.org, ownerorgid: this.editedItem.org, truid: this.editedItem.name }});

    },

async addDisputeResponseTRU (item) {
      
        
        //Object.assign(this.TRUs[this.editedIndex], this.editedItem)
        this.editedItem.coC = this.editedItem.coC + '/' + this.editedItem.newcoC;
        const apiResponse = PostsService.addDisputeResponseTRU(this.editedItem.name,'CoC',this.editedItem.coC,this.editedItem.org);
        this.response = apiResponse;
        this.closeDisputeResponse();
        this.$router.push({name: 'Trace', params: {orgid: this.editedItem.org, ownerorgid: this.editedItem.org, truid: this.editedItem.name }});

    },


async shipOrg () {
      
      const apiResponse = PostsService.updateTRU(this.editedItem.name,'ReleaseFlag', this.editedItem.shiporg1, this.editedItem.org);
      this.response = apiResponse;
      this.closeShip();
      this.$router.push({name: 'QR', params: {orgid: this.editedItem.shiporg1, ownerorgid: this.editedItem.ownerorg, truid: this.editedItem.name }});
     },
     
     closeShip () {
      this.shipDialog = false
      
    },
         
    close () {
      this.dialog = false
      
      
    },

     closeSplit () {
      this.dialogSplit = false
      
     
    },

    closeMaintain () {
      this.dialogMaintain = false
      
     
    },

    closeReceive() {
      this.dialogReceive = false
      
     
    },

    closeSend () {
      this.dialogSend = false
     
    },

    closeDispute () {
      this.dialogDispute = false
     
    },

  },
}
</script>

