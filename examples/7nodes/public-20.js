a = eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var erc20tokenContract = web3.eth.contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"supply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyVar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]);
var erc20token = erc20tokenContract.new(
    {
        from: web3.eth.accounts[0],
        data: '0x60806040526040518060400160405280601781526020017f4e414d45204f4620594f555220544f4b454e2048455245000000000000000000815250600490805190602001906200005192919062000261565b506000600560006101000a81548160ff021916908360ff1602179055506040518060400160405280600381526020017f53594d000000000000000000000000000000000000000000000000000000000081525060069080519060200190620000bb92919062000261565b50348015620000c957600080fd5b506001600360006301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055506103e86000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103e8600281905550600063dd62ed3e60e01b63095ea7b360e01b6323b872dd60e01b60405180807f7472616e7366657228616464726573732c75696e743235362900000000000000815250601901905060405180910390206370a0823160e01b6318160ddd60e01b18181818189050600160036000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505062000310565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002a457805160ff1916838001178555620002d5565b82800160010185558215620002d5579182015b82811115620002d4578251825591602001919060010190620002b7565b5b509050620002e49190620002e8565b5090565b6200030d91905b8082111562000309576000816000905550600101620002ef565b5090565b90565b61107f80620003206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636fecc9eb116100715780636fecc9eb146102cf57806370a08231146102ed57806395d89b4114610345578063a9059cbb146103c8578063cae9ca511461042e578063dd62ed3e1461052b576100b4565b806301ffc9a7146100b957806306fdde031461011e578063095ea7b3146101a157806318160ddd1461020757806323b872dd14610225578063313ce567146102ab575b600080fd5b610104600480360360208110156100cf57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506105a3565b604051808215151515815260200191505060405180910390f35b61012661060b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016657808201518184015260208101905061014b565b50505050905090810190601f1680156101935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ed600480360360408110156101b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106a9565b604051808215151515815260200191505060405180910390f35b61020f61079b565b6040518082815260200191505060405180910390f35b6102916004803603606081101561023b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107a0565b604051808215151515815260200191505060405180910390f35b6102b3610a19565b604051808260ff1660ff16815260200191505060405180910390f35b6102d7610a2c565b6040518082815260200191505060405180910390f35b61032f6004803603602081101561030357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a32565b6040518082815260200191505060405180910390f35b61034d610a7a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561038d578082015181840152602081019050610372565b50505050905090810190601f1680156103ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610414600480360360408110156103de57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b18565b604051808215151515815260200191505060405180910390f35b6105116004803603606081101561044457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561048b57600080fd5b82018360208201111561049d57600080fd5b803590602001918460018302840111640100000000831117156104bf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610c7e565b604051808215151515815260200191505060405180910390f35b61058d6004803603604081101561054157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f94565b6040518082815260200191505060405180910390f35b600060036000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106a15780601f10610676576101008083540402835291602001916106a1565b820191906000526020600020905b81548152906001019060200180831161068457829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b600090565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015801561086c575081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156108785750600082115b15610a0d57816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610a12565b600090505b9392505050565b600560009054906101000a900460ff1681565b60025481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b105780601f10610ae557610100808354040283529160200191610b10565b820191906000526020600020905b815481529060010190602001808311610af357829003601f168201915b505050505081565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610b685750600082115b15610c7357816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610c78565b600090505b92915050565b600082600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a36000604051808061101c602e9139602e01905060405180910390209050600060608673ffffffffffffffffffffffffffffffffffffffff16833388308960405160200180867bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e94578082015181840152602081019050610e79565b50505050905090810190601f168015610ec15780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040526040518082805190602001908083835b60208310610f0c5780518252602082019150602081019050602083039250610ee9565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610f6e576040519150601f19603f3d011682016040523d82523d6000602084013e610f73565b606091505b50809250819350505081610f8657600080fd5b600193505050509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509291505056fe72656365697665417070726f76616c28616464726573732c75696e743235362c616464726573732c627974657329a2646970667358221220847e9e636c96b7ee964ccc3627915a4c00d1c558a7396ef9c3c844c8ae878d0564736f6c634300060b0033',
        gas: '4700000'
    }, function (e, contract) {
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })


var address = "0x1932c48b2bf8102ba33b4a6b545c32236e342f34";
var abi = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "_owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "_spender",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "_from", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}, {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{"internalType": "uint256", "name": "remaining", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_spender", "type": "address"}, {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_spender", "type": "address"}, {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }, {"internalType": "bytes", "name": "_extraData", "type": "bytes"}],
    "name": "approveAndCall",
    "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "balance", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceID", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "supply", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupplyVar",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_to", "type": "address"}, {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_from", "type": "address"}, {
        "internalType": "address",
        "name": "_to",
        "type": "address"
    }, {"internalType": "uint256", "name": "_value", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}];
var private = eth.contract(abi).at(address);
private.transfer("0x1349f3e1b8d71effb47b840594ff27da7e603d17", 200, {from: eth.accounts[0]})


//var abi = [{"inputs": [{"internalType": "address", "name": "_owner", "type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256", "name": "balance", "type": "uint256"}],"stateMutability": "view","type": "function","constant": true}];
