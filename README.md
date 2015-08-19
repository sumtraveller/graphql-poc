# GraphQL Experiment

Just a quick GraphQL experimentation

Install dependencies

`npm install`

Start the server

`npm start`

Run the queries in a new terminal tab

`curl -XPOST -H 'Content-Type:application/graphql'  -d '{ people { fname, lname, age } }' http://localhost:3000/graphql`

To see the N+1 problem:

url -XPOST -H 'Content-Type:application/graphql' -d '{ people { fname, lname, age, email }  }' http://localhost:3000/graphql

Here is a query for N number of people
curl -XPOST -H 'Content-Type:application/graphql'  -d '{ people(limit:5){ fname } }' http://localhost:3000/graphql

curl -XPOST -H 'Content-Type:application/graphql'  -d '{ patient(id:4){ firstName, lastName, medicalStatus { patientId, status }  } }' http://localhost:3000/graphql
 >> {"data":{"patient":{"firstName":"Marlissa","lastName":"Moffett","medicalStatus":{"patientId":4,"status":"StatusD"}}}}⏎

curl -XPOST -H 'Content-Type:application/graphql'  -d '{ patient(id:4){ id, firstName, lastName, address { patientId, street } } }' http://localhost:3000/graphql

Get limit number of patients
curl -XPOST -H 'Content-Type:application/graphql'  -d '{ patients(limit:3){ firstName, lastName, medicalStatus { patientId, status }  } }' http://localhost:3000/graphql

Get all patients
curl -XPOST -H 'Content-Type:application/graphql'  -d '{ patients{ firstName, lastName, medicalStatus { patientId, status }  } }' http://localhost:3000/graphql