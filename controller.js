import fetch from 'node-fetch';
import debouncedFetch from './utils/debouncedFetch'

import {
    getPatientsFromFile,
    getPatientFromFile,
    getPatientAddressesFromFile,
    getPatientMedicalStatusFromFile,
    getPatientMedicalStatusesFromFile,
    getPatientFinanceProgramsFromFile,
} from './data/stubFunctions';

export const getClients = () => {

    global.requestCount++;

    var url = 'http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&age={number|70}&address={addressObject}';
    return fetch(url)
        .then((res) => res.json())
        .then((data) => Promise.resolve(data));

}

// reduce N+1
// https://gist.github.com/mnylen/e944cd4e3255f4421a0b
export const getEmail = debouncedFetch((queue) => {

    global.requestCount++;

    var url = 'http://www.filltext.com/?rows=' + queue.length + '&email={email}';
    fetch(url).then((response) => response.json()).then((response) => {
        queue.forEach(([person, resolve], index) => {
            resolve(response[index].email)
        })
    })
})

export const getPatientDemographic = debouncedFetch((queueOfPatients)=> {

    global.requestCount++;

    // create the signature to function given a queueOfPatients
    // johnsPatientDemographicFunction( [patientIds] )
    let patientIds = queueOfPatients.map((patient)=> patient.id)
    getPatientFromFile(patientIds)

    // fetch all the demographics for all the patients in the queue
    fetch(url).then((response) => response.json()).then((response) => {
        queue.forEach(([patient, resolve], index) => {
            resolve(response[index])
        })
    })
})

export const getPatientAddress = debouncedFetch((patient)=> {
    // create the signature to function given a queueOfPatients
    // johnsPatientDemographicFunction( [patientIds] )

    global.requestCount++;

    let patientId = queueOfPatients.id

    fetch('/data/patientAddresses.json').then((response) => response.json()).then((response) => {
        queue.forEach(([patientAddress, resolve], index) => {
            console.log(patientAddress)
        })
    })
})

export const getPatients = (limit)=> {
    global.requestCount++;
    return getPatientsFromFile(limit)
}

export const getPatientById = (patientId)=> {
    global.requestCount++;
    console.log('findPatientById');
    console.log(patientId)
    var patient = getPatientFromFile(patientId)
    console.log('getPatientDemorgraphicFromFile returned')
    return patient[0];
}

export const findPatientAddressById = debouncedFetch((queuedPatientIds)=> {
    global.requestCount++;
    let patientIds = queuedPatientIds.map(([patientId])=> patientId)
    let addresses = getPatientAddressesFromFile(patientIds)

    queuedPatientIds.forEach(([patient, resolve], index)=> {
        resolve(addresses[index]);
    });
})

export const getPatientMedicalStatus = debouncedFetch((queuedPatients)=> {
    global.requestCount++;

    let patientIds = queuedPatients.map(([patient])=> patient.id)
    let medicalStatuses = getPatientMedicalStatusesFromFile(patientIds)

    //return getPatientMedicalStatusFromFile(patient.id);
    queuedPatients.forEach(([patient, resolve], index)=> {
        resolve(medicalStatuses[index])
    });
})

export const getPatientFinanceProgram = debouncedFetch((queuedPatients)=> {
    global.requestCount++;
    let patientIds = queuedPatients.map(([patient])=> patient.id)
    let financePrograms = getPatientFinanceProgramsFromFile(patientIds)

    queuedPatients.forEach(([patient, resolve], index)=> {
        resolve(financePrograms[index]);
    });

    //return getPatientFinanceProgramFromFile(patient.id)[0]
});