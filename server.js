import express from 'express';
import bodyParser from 'body-parser';
import { graphql } from 'graphql';
import schema from './schema';

const app = express();
let PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {
	global.requestCount = 0
	console.log('graphql called', JSON.stringify(req.body));
	graphql(schema, req.body)
		.then(result => {
			console.log("number of requests for this query", global.requestCount);
			res.send(result)
		}
	);
});

let server = app.listen(PORT,
	() => console.log('Server running... at localhost:%s', PORT)
);
