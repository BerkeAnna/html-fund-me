
import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
    console.log("click")
    if(typeof window.ethereum != "undefined"){
        try{
            await window.ethereum.request({ method: "eth_requestAccounts" })
        }catch (error){
               console.log(error) 
        }
            connectButton.innerHTML = "Connected!"
          
    }else{
       connectButton.innerHTML = "Please install metamask!"
    }
}

async function fund(ethAmount){
    console.log(`Funding with ${ethAmount}...`)
    if(typeof window.ethereum != "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
    }
}