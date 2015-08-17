import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString,
} from 'graphql';

import { PersonType } from './schemaType';
import { PatientType } from './schemaType';
import { getClients } from './controller';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            people: {
                type: new GraphQLList(PersonType),
                resolve: (__placeholder, {limit})=> {
                    console.log(limit);
                   return getClients()
                },
                args: {
                    limit: {type: GraphQLInt}
                }
            },
            patients: {
                type: new GraphQLList(PatientType),
                args: {
                    limit: {type: GraphQLInt}
                },
                resolve: (__placeholder,{limit}) => {
                    console.log(limit);
                    return getPatients(limit)
                }
            },
            count: {
                type: GraphQLInt,
                resolve: () => 20
            }
        }
    })
});

export default schema;