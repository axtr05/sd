const add = (a,b) => a + b; //arrow fn
function compute(a,b,callback){ 
    console.log("calculating...");
    const res = callback(a,b); //callback
    console.log(res);
}
function fetch(){
    return new Promise((resolve) => { //promise
        resolve("data fetched");
    });
}
async function process(){ 
    console.log("fetching...");
    const res = await fetch(); //async/await
    console.log(res);
}
compute(6,7,add);
process();
