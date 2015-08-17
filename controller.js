import fetch from 'node-fetch';
import debouncedFetch from './utils/debouncedFetch'

import { getPatientDemographicFromFile } from './data/stubFunctions';

export const getClients = () => {
    var url = 'http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&age={number|70}&address={addressObject}';

    return fetch(url)
        .then((res) => res.json() )
        .then((data) => Promise.resolve(data));

}

// reduce N+1
// https://gist.github.com/mnylen/e944cd4e3255f4421a0b
export const getEmail = debouncedFetch((queue) => {
    var url = 'http://www.filltext.com/?rows=' + queue.length + '&email={email}';
    fetch(url).then((response) => response.json()).then((response) => {
        queue.forEach(([person, resolve],index) => {
            resolve(response[index].email)
        })
    })
})



export const getPatientDemographic = debounceFetch((queueOfPatients)=> {
    // create the signature to function given a queueOfPatients
    // johnsPatientDemographicFunction( [patientIds] )
    let patientIds = queueOfPatients.map((patient)=> patient.id)
    getPatientDemographicFromFile( patientIds )

    // fetch all the demographics for all the patients in the queue
    fetch(url).then((response) => response.json()).then((response) => {
        queue.forEach(([patient, resolve],index) => {
            resolve(response[index])
        })
    })

})


