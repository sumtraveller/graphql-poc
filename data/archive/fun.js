/**
 * Created by ahuffman on 8/17/15.
 */

for (var i = 75; i <= 100; i++) {
    var ob = {
        "street": i + " Molestie Ave",
        "city": "Billerica",
        "state": "AZ",
        "zip": parseInt(i + "" + 6 + "" + i),
        "patientId": i
    }

    console.log(JSON.stringify(ob), ",")
}















