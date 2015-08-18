/**
 * Created by ahuffman on 8/17/15.
 */
let patientData = require('./patientDemographics.json');
let patientMedicalStatusesData = require('./patientMedicalStatuses.json');

//let getWithDelayReturnPromise = (fn)=>{
//    return Promise(fn).wait();
//}
//
export const getPatientDemographicsFromFile = (patientIds)=> patientData.filter((patient)=> patientIds.contains(patient.id))

export const getPatientDemographicFromFile = (patientId)=>  patientData.filter((patient)=> patient.id == patientId )

export const getPatientMedicalStatusFromFile = (patientId)=> patientMedicalStatusesData.filter((medStatus)=> medStatus.patientId == patientId)[0]
