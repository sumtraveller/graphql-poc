/**
 * Created by ahuffman on 8/17/15.
 */
let patientDemographicData = require('./patientDemographics.json');
let patientAddressData = require('./patientAddresses.json');
let patientMedicalStatusesData = require('./patientMedicalStatuses.json');

export const getPatientDemographicFromFile = (patientId)=> {
    console.log('getting patient demographic data from file');
    return patientDemographicData.filter(function (patient) {
        if (patient.id == patientId) {
            return patient;
        }
    });
}

export const getPatientAddressFromFile = (patientId)=> patientAddressData.filter((address) => address.patientId == patientId)[0]

export const getPatientMedicalStatusFromFile = (patientId)=> patientMedicalStatusesData.filter((medStatus)=> medStatus.patientId == patientId)[0]
