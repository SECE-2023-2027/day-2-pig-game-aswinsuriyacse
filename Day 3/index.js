setTimeout(()=>{
    console.log("From timeout");
},0)

function PromiseVersion() {
    return new Promise((res,req)=>{
        res("From resolve")
        req("From require")
    })
}

PromiseVersion().then((res)=>{
    console.log(res)
}).catch((req)=>{
    console.log(req);
})