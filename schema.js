import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
} from 'graphql';

import { PersonType } from './schemaType';
import { getClients } from './controller';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			people: {
				type: new GraphQLList(PersonType),
				resolve: getClients,
			},
			emails:{
				type: new GraphQLList(GraphQLString),
				resolve:(people) =>{ console.log("here here"); console.log(JSON.stringify(people, null, 2)); return "nan"; }
			},
			count: {
				type: GraphQLInt,
				resolve: () => 20
			}
		}
	})
});

export default schema;