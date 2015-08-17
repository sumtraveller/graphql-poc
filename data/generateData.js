var patients = require('./patientDemographics.json')

// Generate FinancePrograms
console.log("[")
patients.forEach((patient)=> {
    let financeProgram = {
        patientId: patient.id,
        balance: Math.floor((Math.random() * 1000000))
    };
    console.log(JSON.stringify(financeProgram), ",");

})
console.log("]")

/*

 console.log("[")
 patients.forEach((patient,index)=>{
 patient.id = index + 1
 console.log(JSON.stringify(patient))
 })
 console.log("]")
 */
/*
 var makeSwitch = (i)=> {
 switch (i) {
 case 0:
 return "Treatment A"
 break;
 case 1:
 return "Treatment B"
 break;
 case 2:
 return "Charge C"
 break;
 case 3:
 return "ChargeD"
 break;
 }
 }

 let genDate = (i)=> i % 12 + 1 + "/" + (i % 3 + 1) + "" + (i % 10) + "/201" + i % 5;


 console.log("[")
 for (var i = 1; i <= 100; i++) {

 var s = {
 id: i,
 descriptionOfTreatment: makeSwitch(Math.ceil((Math.random(i)) * 10) % 4),
 }
 console.log(JSON.stringify(s), ",")
 }
 }
 console.log("]")

 */
/*
 // Financial Transactions
 var makeStatus = (i)=> {
 switch (i) {
 case 0:
 return "ChargeA"
 break;
 case 1:
 return "ChargeB"
 break;
 case 2:
 return "ChargeC"
 break;
 case 3:
 return "ChargeD"
 break;
 }
 }

 let genDate = (i)=> i % 12 + 1 + "/" + (i % 3 + 1) + "" + (i % 10) + "/201" + i % 5;


 console.log("[")
 for (var i = 1; i <= 100; i++) {
 for (let j = 0; j < 50; j += Math.floor(Math.random()*10) ) {
 var s = {
 patientId: i,
 type: makeStatus(Math.ceil((Math.random(i)) * 10) % 4),
 medicalTreatmentId: Math.floor((Math.random()*10))%7  + 1,
 amount: (i * 10000 + j * 250 + j * 75 + i) % 20000,
 transactionDate: genDate(j)
 }
 console.log(JSON.stringify(s), ",")
 }
 }
 console.log("]")
 */