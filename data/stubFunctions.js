/**
 * Created by ahuffman on 8/17/15.
 */
let patientDemographicData = require('./patientDemographics.json');
let patientAddressData = require('./patientAddresses.json');
let patientMedicalStatusesData = require('./patientMedicalStatuses.json');

export const getPatientFromFile = (patientId)=> patientDemographicData.filter((patient)=> patient.id == patientId)[0]

export const getPatientsFromFile = (limit)=> limit == null || limit > patientDemographicData.length ? patientDemographicData : patientDemographicData.slice(0, limit)

export const getPatientAddressFromFile = (patientId)=> patientAddressData.filter((address) => address.patientId == patientId)[0]

export const getPatientMedicalStatusFromFile = (patientId)=> patientMedicalStatusesData.filter((medStatus)=> medStatus.patientId == patientId)[0]
