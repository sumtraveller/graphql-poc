/**
 * Created by ahuffman on 8/17/15.
 */
let patientDemographicData = require('./patientDemographics.json');
let patientAddressData = require('./patientAddresses.json');
let patientMedicalStatusesData = require('./patientMedicalStatuses.json');
let financePrograms = require('./patientFinancePrograms.json')

export const getPatientFromFile = (patientId)=> patientDemographicData.filter((patient)=> patient.id == patientId)[0]

export const getPatientsFromFile = (limit)=> limit == null || limit > patientDemographicData.length ? patientDemographicData : patientDemographicData.slice(0, limit)

//export const getPatientAddressFromFile = (patientId)=> patientAddressData.filter((address) => address.patientId == patientId)[0]

export const getPatientAddressesFromFile = (patientIds)=> patientAddressData.filter((address) => patientIds.indexOf(address.patientId) != -1)

export const getPatientMedicalStatusFromFile = (patientId)=> patientMedicalStatusesData.filter((medStatus)=> medStatus.patientId == patientId)[0]

export const getPatientMedicalStatusesFromFile = (patientIds)=> patientMedicalStatusesData.filter((medStatus)=> patientIds.indexOf(medStatus.patientId) != -1 )

export const getPatientFinanceProgramFromFile = (patientId)=> financePrograms.filter((financeProgram)=> financeProgram.patientId==patientId )

export const getPatientFinanceProgramsFromFile = (patientIds)=> financePrograms.filter((finances)=> patientIds.indexOf(finances.patientId) != -1 )

