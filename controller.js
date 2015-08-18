import fetch from 'node-fetch';
import debouncedFetch from './utils/debouncedFetch'

import { getPatientDemographicFromFile, getPatientDemographicsFromFile, getPatientMedicalStatusFromFile } from './data/stubFunctions';

export const getClients = () => {
    var url = 'http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&age={number|70}&address={addressObject}';

    return fetch(url)
        .then((res) => res.json())
        .then((data) => Promise.resolve(data));

}

// reduce N+1
// https://gist.github.com/mnylen/e944cd4e3255f4421a0b
export const getEmail = debouncedFetch((queue) => {
    var url = 'http://www.filltext.com/?rows=' + queue.length + '&email={email}';
    fetch(url).then((response) => response.json()).then((response) => {
        queue.forEach(([person, resolve], index) => {
            resolve(response[index].email)
        })
    })
})

export const getPatientDemographic = debouncedFetch((queueOfPatients)=> {
    console.log("AAAA");

    // create the signature to function given a queueOfPatients
    // johnsPatientDemographicFunction( [patientIds] )
    let patientIds = queueOfPatients.map((patient)=> patient.id)
    getPatientDemographicFromFile(patientIds)

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

    console.log('getPatientAddress');
    console.log('getPatientAddress ' + patient.json);
    let patientId = queueOfPatients.id

    fetch('/data/patientAddresses.json').then((response) => response.json()).then((response) => {
        queue.forEach(([patientAddress, resolve], index) => {
            console.log(patientAddress)
        })
    })
})

export const getPatients = debouncedFetch((limit)=> {
    // create the signature to function given a queueOfPatients
    // johnsPatientDemographicFunction( [patientIds] )

    console.log('getPatientAddress');
    console.log('getPatientAddress ' + patient.json);
    let patientId = queueOfPatients.id

    fetch('/data/patientAddresses.json').then((response) => response.json()).then((response) => {
        queue.forEach(([patientAddress, resolve], index) => {
            console.log(patientAddress)
        })
    })
})


export const getPatientById = (patientId)=> {
    // create the signature to function given a queueOfPatients
    // johnsPatientDemographicFunction( [patientIds] )
    console.log(patientId)
    var patient = getPatientDemographicFromFile(patientId)
    console.log(patient[0].id)

    return patient[0];
}

export const getPatientMedicalStatus = (patient)=> {

    console.log('patient', patient.id)
    let medStatus = getPatientMedicalStatusFromFile(patient.id)
    console.log(medStatus);
    return new Promise((resolve, reject)=> { resolve(medStatus)} );
    //return medStatus;
}

