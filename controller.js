import fetch from 'node-fetch';
import debouncedFetch from './utils/debouncedFetch'


exports.getClients = () => {
    var url = 'http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&age={number|70}&address={addressObject}';

    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
//        	console.log(data);
            return Promise.resolve(data);
        });

}

// reduce N+1
// https://gist.github.com/mnylen/e944cd4e3255f4421a0b
exports.getEmail = debouncedFetch((queue) => {
    var url = 'http://www.filltext.com/?rows=' + queue.length + '&email={email}';
    fetch(url).then((response) => response.json()).then((response) => {
        queue.forEach(([person, resolve],index) => {
            resolve(response[index].email)
        })
    })
})



