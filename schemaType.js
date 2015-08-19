import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLString,
} from 'graphql';

var countNumTimesCalled = 0;

import { getEmail, getPatientDemographic, getPatientMedicalStatus, findPatientAddressById } from './controller';

export const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'Describe a Person',
    fields: () => ({
        fname: {
            type: GraphQLString,
            description: 'Person first name'
        },
        lname: {
            type: GraphQLString,
            description: 'Person last name'
        },
        age: {
            type: GraphQLInt,
            description: 'Person age'
        },
        address: {
            streetAddres: {
                type: GraphQLString
            },
            city: {
                type: GraphQLString
            },
            zip: {
                type: GraphQLString
            }
        },
        email: {
            type: GraphQLString,
            description: 'Email',
            resolve: (person)=> getEmail(person),
        },
        args: {
            limit: {type: GraphQLInt}
        }
    })
});

export const PatientAddress = new GraphQLObjectType({
    name: 'PatientAddress',
    description: 'Address',
    fields: ()=> ({
        patientId: {
            type: GraphQLInt,
            description: "Patient Id"
        },
        street: {
            type: GraphQLString,
            description: 'Street1'
        },
        city: {
            type: GraphQLString,
            description: 'City'
        },
        state: {
            type: GraphQLString,
            description: 'State'
        },
        zip: {
            type: GraphQLInt,
            description: 'Zip'
        },
    })
});

export const PatientMedicalStatus = new GraphQLObjectType({
    name: 'PatientMedicalStatus',
    description: 'Patient Medical Status',
    fields: ()=> ({
        patientId: {
            type: GraphQLInt,
            description: "Patient Id"
        },
        status: {
            type: GraphQLString,
            description: 'Status'
        },
        updatedDate: {
            type: GraphQLString,
            description: 'UpdatedDate'
        },
    }),
});

export const FinancialTransaction = new GraphQLObjectType({
    name: 'FinancialTransaction',
    description: 'Financial Transaction',
    fields: ()=> ({
        id: {
            type: GraphQLInt,
            description: "Id"
        },
        patientId: {
            type: GraphQLInt,
            description: "Patient Id"
        },
        type: {
            type: GraphQLString,
            description: 'Type'
        },
        medicalTreatmentId: {
            type: GraphQLInt,
            description: 'Medical Treatment Id'
        },
        medicalTreatment: {
            type: MedicalTreatment,
            description: 'Medical Treatment',
            resolve: (financialTransaction)=> getMedicalTreatment(financialTransaction.medicalTreatmentId)
        },
        amount: {
            type: GraphQLInt,
            description: 'Amount'
        },
        transactionDate: {
            type: GraphQLString,
            description: 'Transaction Date'
        }
    }),
});

export const PatientFinanceProgram = new GraphQLObjectType({
    name: 'PatientFinanceProgram',
    description: 'Finance program',
    fields: ()=> ({
        patientId: {
            type: GraphQLInt,
            description: "Patient Id"
        },
        balance: {
            type: GraphQLFloat,
            description: 'balance'
        },
        transactions: {
            type: GraphQLList(FinancialTransaction),
            description: 'Financial Transactions',
            resolve: (patient)=> getPatientFinancialTransactions(patient)
        },
    }),
});

export const MedicalTreatment = new GraphQLObjectType({
    name: 'MedicalTreatment',
    description: 'Medical Treatment',
    fields: ()=> ({
        id: {
            type: GraphQLInt,
            description: "Id"
        },
        descriptionOfTreatment: {
            type: GraphQLString,
            description: "Description of Treatment"
        },

    }),
})

export const PatientType = new GraphQLObjectType({
    name: 'Patient',
    description: 'A patient record',
    fields: ()=> ({
        id: {
            type: GraphQLInt,
            description: "id"
        },
        firstName: {
            type: GraphQLString,
            description: 'Patient first name'
        },
        lastName: {
            type: GraphQLString,
            description: 'Patient last name'
        },
        address: {
            type: PatientAddress,
            description: 'Patient Address',
            resolve: (patient) => findPatientAddressById(patient.id)
        },
        medicalStatus: {
            type: PatientMedicalStatus,
            description: 'Patient Medical Status',
            resolve: (patient)=> getPatientMedicalStatus(patient)
        },
    }),

    /*
     ,
     medicalStatus: {
     type: PatientMedicalStatus,
     description: 'Patient Medical Status',
     resolve: (patient)=> getPatientMedicalStatus(patient)
     },

     /*,
     ,
     address: {
     type: PatientAddress,
     description: 'Patient Address',
     resolve: (patient) => getAddress(person)
     },
     financeProgram: {
     type: PatientFinanceProgram,
     description: 'Finance Program',
     resolve: (patient)=> getPatientFinanceProgram(patient)
     } */
})