/**
 * Created by ahuffman on 8/17/15.
 */
var p = new Promise((resolve)=>{
    resolve(2);
});

p.then((result)=>{
    console.log(result)
});

