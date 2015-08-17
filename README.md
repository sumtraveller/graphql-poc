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

Get 5 patient w/ demographic
curl -XPOST -H 'Content-Type:application/graphql'  -d '{ patients(limit:5){ demographic:{ firstName, lastName } }' http://localhost:3000/graphql


Get a patient
curl -XPOST -H 'Content-Type:application/graphql'  -d '{ patient(id:4){ demographic:{ firstName } } }' http://localhost:3000/graphql