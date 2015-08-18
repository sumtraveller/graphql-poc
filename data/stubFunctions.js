/**
 * Created by ahuffman on 8/17/15.
 */
let patientDemographicData = require('./patientDemographics.json');
let patientAddressData = require('./patientAddresses.json');

export const getPatientDemographicFromFile = (patientId)=> {
    console.log('getting patient demographic data from file');
    return patientDemographicData.filter(function(patient) {
        if (patient.id == patientId) {
            return patient;
        }
    });
}

export const getPatientAddressFromFile = (patientId)=> {
    console.log('getting patient address data from file');
    return patientAddressData.filter(function(patient) {
        if (patient.id == patientId) {
            return patient;
        }
    });
}