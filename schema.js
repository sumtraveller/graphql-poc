import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString,
} from 'graphql';

import { PersonType, PatientType, PatientMedicalStatus } from './schemaType';
import { getClients, getPatientMedicalStatus, getPatientById, getPatients} from './controller';

const schema = new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            people: {
                type: new GraphQLList(PersonType),
                resolve: (parent, {limit})=> {
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
                resolve: (parent, {limit}) => getPatients(limit)
            },
            patient: {
                type: PatientType,
                args: {
                    id: {type: GraphQLInt}
                },
                resolve: (parent, {id}) => {
                    return getPatientById(id)
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