import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString,
} from 'graphql';

import { PersonType, PatientType, PatientMedicalStatus } from './schemaType';
import { getClients, getPatientMedicalStatus, getPatients, getPatientsById } from './controller';

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
            patient: {
                type: PatientType,
                args: {
                    id: { type: GraphQLInt}
                },
                resolve: ({id}) => {
                    console.log(id);
                    return getPatientsById(id)
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