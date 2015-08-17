/**
 * Created by ahuffman on 8/17/15.
 */
let patientData = require('./patientDemographics.json');

//let getWithDelayReturnPromise = (fn)=>{
//    return Promise(fn).wait();
//}
//
export const getPatientDemographicsFromFile = (patientIds)=> {
    return patientData.filter((patient)=> patientIds.contains(patient.id));
}

export const getPatientDemographicFromFile = (patientId)=> {
    console.log('getting patient demographic data');
    return patientData.filter(function(patient) {
        if (patient.id == patientId) {
            console.log('patient value in stubFunctions is ');
            console.log(patient);
            return patient;
        }
    });
}