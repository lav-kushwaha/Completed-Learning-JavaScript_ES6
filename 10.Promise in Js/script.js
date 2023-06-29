//Promise In JavaScripts.

let data = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const a = "rejected";
            //resolve(a);
            reject(a);
        },3000)
    })
}

data().then((a)=>{
    alert(a);
})
.catch((a)=>{
    console.log("Hey I am ",a)
})