import Api from '@/services/api'

export default {
  
  queryAllTRU() {
    return Api().get('queryAllTRU')
  },
  createTRU(gTID, quantity, batchNumber, coC, expiryDate, selectedOrg) {
    return Api().post('createTRU', {
      GTIN: gTID,
      Quantity: quantity,
      BatchNumber: batchNumber,
      LocalID: localID,
      TRUExpiryDate: expiryDate,
      CoCID: coC,
      TraceHash: "NA",
      CoCHash: "NA",
      ReleaseFlag: "NA",
      RequestFlag: "NA",
      PaymentPeriod: paymentPeriod,
      ORGID: selectedOrg,
    }) 
  },

  splitTRU(truid, quantity, localID, selectedOrg) {
    return Api().post('splitTRU', {
      TRUID: truid,
      Quantity: quantity,
      LocalID: localID,
      ORGID: selectedOrg,
    }) 
  },

  
  updateTRU(truid, propName, propValue, selectedOrg) {
    return Api().post('updateTRU', {
      TRUID: truid,
      PropName: propName,
      PropValue: propValue,
      ORGID: selectedOrg,
    }) 
  },
  changeOWN(prevORG, truid, nextORG) {
    return Api().post('changeOWN', {
      OWNER: prevORG,
      TRUID: truid,
      ORGID: nextORG,
    }) 
  },
 
  searchTRU(localID) {
    return Api().post('searchTRU', {
      LocalID: localID,
    }) 
  },

  queryTRU(truid) {
    return Api().post('queryTRU', {
      TRUID: truid,
    }) 
  },


  queryTRACE(orgid, truid) {
    return Api().post('queryTRACE', {
      ORGID: orgid,
      TRUID: truid,
    }) 
  },
  
  querySCA(orgid) {
    return Api().post('querySCA', {
      ORGID: orgid
    }) 
  },
}