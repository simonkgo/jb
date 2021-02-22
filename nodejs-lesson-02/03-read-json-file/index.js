const fs = require('fs')
const util = require ("util")

const getUserSync = ()=>{ // this is the sync way
    const result = fs.readFileSync("./db.json","utf-8")
    console.log("result",JSON.parse(result));
}

const mainSync = ()=>{ // do not use this the function is not async
    console.log("Before");
    getUserSync()
    console.log("After");
}

// mainSync()

const getUserAsync = async ()=>{ // this way is the async way ! 
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if (err) {
            console.log(err)
        }

        console.log("data",data);
    }
        )
}
const mainAsync = ()=>{  //  this function is good, but the best way is below 
    console.log("before");
    getUserAsync()
    console.log("after");
}
// mainAsync()


const getUserAsyncBestWay = async()=>{ // best way with Async and no hell code !
const readFile = util.promisify(fs.readFile)
try {
    const data =await readFile("./db.json","utf-8")
    console.log(JSON.parse(data));
} catch (err) {
    console.log(err);
}
}

const mainAsyncBestWay = () => { // best async  way 
    console.log("before");
    getUserAsyncBestWay()
    console.log("after");
}

mainAsyncBestWay()

