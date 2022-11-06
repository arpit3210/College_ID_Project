function connectToMetMask() {
    ethereum.enable().then(result => {
        console.log("Account: ",result);
    })
}

$(document).ready(function () {

    web3 = new Web3(ethereum);
    console.log("Connection Object: ",web3)

    const contractAddress = "0xDb501eCc2222e9CF7FF594f09d7E4C25767e7e80";
    const contractAbi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_StudentID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_StudentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_Branch",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_CollegeName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_year",
                    "type": "string"
                }
            ],
            "name": "newCollegeid",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "studentidDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "StudentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "Branch",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "CollegeName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "year",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    myContract = new web3.eth.Contract(contractAbi, contractAddress);
    console.log("Contract Object: ",myContract);
})