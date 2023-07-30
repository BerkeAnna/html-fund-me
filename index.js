async function connect() {
    console.log("click")
    if(typeof window.ethereum != "undefined"){
        try{
            await window.ethereum.request({ method: "eth_requestAccounts" })
        }catch (error){
               console.log(error) 
        }
            document.getElementById("connectButton").innerHTML = "Connected!"
    }else{
       document.getElementById("connectButton").innerHTML = "Please install metamask!"
    }
}

async function fund(ethAmount){
    console.log("g")
    console.log(`Funding with ${ethAmount}...`)
}