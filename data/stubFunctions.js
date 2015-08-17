/**
 * Created by ahuffman on 8/17/15.
 */

let patients = require('./patientDemographics.json')

//let getWithDelayReturnPromise = (fn)=>{
//    return Promise(fn).wait();
//}
//
export const getPatientDemographicsFromFile = (patientIds)=> {
    return patients.filter((patient)=> patientIds.contains(patient.id));
}

export const getPatientDemographicFromFile = (patientId)=> {
    return patients.filter((patient)=> patientId == patient.id);
}