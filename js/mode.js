// JavaScript Document
MyLibrary = {"wallet":"0x00"};
MyLibrary.network = "0x1"; //goerli 0x5 //bsc: 0x56
MyLibrary.etherScan = "https://etherscan.io"; //https://goerli.etherscan.io //https://bscscan.com/
MyLibrary.decimals = 18;
MyLibrary.tokenAddress = '0xB656AB6B7a34124866eCd40827Db90bfc27ef021';

MyLibrary.contractABI = [ { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "torcher", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "ethbuy", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "BuyBack", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "claimer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reflection", "type": "uint256" } ], "name": "ClaimReflection", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "pulled", "type": "uint256" } ], "name": "DiceRoll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "charity", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "auctioned", "type": "uint256" } ], "name": "Donation", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" } ], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" } ], "name": "Unstaked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" } ], "name": "autoLiquidity", "type": "event" }, { "inputs": [], "name": "accidentalEthSweep", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "addBeneficiary", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "addBot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "addDicePrize", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "addExcluded", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" } ], "name": "addExcludedArray", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "addLiquidity", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "addReflectionETH", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" } ], "name": "addStealthLaunch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "swapdeadline", "type": "uint256" } ], "name": "bonfireEvent", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "charityWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimReflection", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "blocknumber", "type": "uint256" } ], "name": "kickOff", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "playDiceGame", "outputs": [ { "internalType": "uint256", "name": "number", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "toggle", "type": "bool" }, { "internalType": "uint256", "name": "what", "type": "uint256" } ], "name": "rebalancingTrigger", "outputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "removeBeneficiary", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "removeBot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" } ], "name": "removeStealthLaunch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_wallet", "type": "address" } ], "name": "setAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_wallet", "type": "address" } ], "name": "setBornfire", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rate", "type": "uint256" } ], "name": "setBuyTax", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_charityWallet", "type": "address" } ], "name": "setCharityWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_wallet", "type": "address" } ], "name": "setDevelopment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "stakeRequired", "type": "uint256" } ], "name": "setDiceStakeAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_wallet", "type": "address" } ], "name": "setMarketing", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxHoldingRate", "type": "uint256" } ], "name": "setMaxHoldings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "setRebalancingContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rate", "type": "uint256" } ], "name": "setSellTax", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "stakeDays", "type": "uint256" } ], "name": "setStakeDays", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rate", "type": "uint256" } ], "name": "setTaxCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokens", "type": "uint256" } ], "name": "stakeTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "buyback", "type": "bool" }, { "internalType": "bool", "name": "autoLP", "type": "bool" } ], "name": "toggleBuyBackAutoLP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_reflectMode", "type": "bool" } ], "name": "toggleReflectMode", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "developmentAddr", "type": "address" }, { "internalType": "address payable", "name": "marketingAddr", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "_adminWallet", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_autoLPadded", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_beneficiaryReward", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_bornFireWallet", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_burnAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buyRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_charityBeneficiary", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_charityPool", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_claimBeneficiary", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_developmentWallet", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_diceGameReflections", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_dicelosses", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_diceStakeRequirement", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_dicewinnings", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_ethRewardBasis", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_feeTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_lastPlay", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_lastRewardBasis", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_lastWin", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_marketingWallet", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxHoldings", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_myplaysTotal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_netEthRewardedWallet", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_netRewardClaims", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_netRewardsmyDonors", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_netRewardsTomyBE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_pairAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_playCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_rebalancingContract", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_sellRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_stakedays", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "_taxExcluded", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxLimit", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalBeneficiaryAssigns", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalStaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_tradingStartBlock", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "acpt", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "autoLPMode", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyBackMode", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "circulatingSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "currentDonorRewards", "outputs": [ { "internalType": "uint256", "name": "n", "type": "uint256" }, { "internalType": "uint256", "name": "netreward", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "currentRewardForWallet", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "swap", "type": "uint256" } ], "name": "fetchSwapAmounts", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "getStakeData", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isBot", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isTaxExcluded", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [ { "internalType": "uint256", "name": "tokenprice", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "reflectMode", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tradingOpen", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "viewBenefactors", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" } ];

//Initialize
try{
	if (typeof window.ethereum == 'undefined') {
		
		$('#bornfireSum').empty().append('No Metamask No Data');

	}else if (typeof window.ethereum !== 'undefined') {
		//Metamask available, set WEB3 provider
		window.web3 = new Web3(window.ethereum);
		//create instance
		var tokenAddress = MyLibrary.tokenAddress;		
		var erc20Abi = MyLibrary.contractABI;
		window.tokenInst = new window.web3.eth.Contract(erc20Abi, tokenAddress);
	} else {
		console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live");
		// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
		App.web3 = new Web3( new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
	}
}catch(error) {}
//CALLS
//repeat, with async and promise so it dont overspill
$(document).ready(async function(){
	const setatmIntervalAsync = (fn, ms) => {
		fn().then(() => {
			setTimeout(() => setatmIntervalAsync(fn, ms), ms);
		});
	};
	setatmIntervalAsync(async () => {
		InitialiseConnection();
	}, 10000);

});
async function InitialiseConnection(){
	if(chainCheck()){//correct chain, fetch balances
		currentBlock(); //Fetch current block
		dataFetchProceed();
	}else{//incorrect chain, request switch	
		if(switchNetwork()){//if given
			InitialiseConnection();//try again
		}else{
			//automatically throws swal error through the switchNetwork function
		}		
	}
}
async function currentBlock(){
	try{//get blocknumber regardless if logged in or not, unlocked or not
		await window.web3.eth.getBlockNumber().then(block => {
			document.getElementById("blocknumber").innerHTML = '<a href="'+MyLibrary.etherScan+'/block/'+block+'" target="_blank">'+block+'</a>';
			$(".dot").css({'background-color': '#04C86C'});//green
		});
	} catch (error) {
		document.getElementById("blocknumber").innerHTML = 'offline';
		$(".dot").css({'background-color': '#ec0624'});//red
	}	
}
async function chainCheck(){
	await ethereum.request({method: 'eth_chainId' }).then((result) => {chainID = result;})
	if(chainID == MyLibrary.network){//eth chain
		console.log('connected: '+chainID);
		$('#blocknumber').css('color', '#04C86C');//green
		return true;
	}else if(chainID !== MyLibrary.network){//wrong network
		console.log('wrong chain: '+chainID);
		document.getElementById("blocknumber").innerHTML = 'wrong chain!';
		$('#blocknumber').css('color', '#ff4747');//red
		return false;
	}
}
async function dataFetchProceed() {
	try{
		var burnmode = await tokenInst.methods.buyBackMode().call();	
		var lpmode = await tokenInst.methods.autoLPMode().call();
		
		if(burnmode){
			burnModeRun();
		}
		if(lpmode){
			autoLPModeRun();
		}
	} catch (error) {
		console.log(error); 
	}
}
//Bonfire Mode
async function burnModeRun(){
	$("#autoLPModeWidget, #autoLPSign").css('display', 'none');
	$("#burnModeWidget, #autoBurnSign").css('display', 'block');
	//balance from zero address
	var burntToDate = await tokenInst.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
	var tokens = (burntToDate / Math.pow(10, MyLibrary.decimals)).toFixed(2);
	var tokens = parseFloat(tokens);//float so we can add the values not append
	if(tokens > 0){
		$('#bornfireSum').empty().append(parseInt(tokens) + '\nburnt ToDate');
	}else{
		$('#bornfireSum').empty().append(0 + ' burnt ToDate');
	}
}
//Auto Liquidity Mode
async function autoLPModeRun(){
	$("#burnModeWidget, #autoBurnSign").css('display', 'none');
	$("#autoLPModeWidget, #autoLPSign").css('display', 'block');
	
	//balance from zero address
	var addedToDate = await tokenInst.methods._autoLPadded().call();
	var addedToDate = fromWeiToFixed8(addedToDate);//string result of toFixed
	if(addedToDate > 0){
		$('#rewardsSum').empty().append(addedToDate + '\nETH total added');
	}else{
		$('#rewardsSum').empty().append(0 + ' \nETH total added');
	}
}


//Bonfire - Burn Tokens
async function bonfireStart(input_eth){
	//toWei & Big Number inputs
	var input_eth = web3.utils.toWei(String(input_eth), 'ether'); 
	var input_eth = web3.utils.toBN(input_eth);
	var deadline = web3.utils.toBN(300);
	alert(input_eth)
	//estimate gasLimit
	var encodedData = tokenInst.methods._bonfireEvent(deadline).encodeABI();
	var estimateGas = await web3.eth.estimateGas({
		value: input_eth,
		data: encodedData,
		from: MyLibrary.wallet,
		to: MyLibrary.tokenAddress
	});
	// estimate the gasPrice
	var gasPrice = await web3.eth.getGasPrice(); 
	//transaction
	tokenInst.methods._bonfireEvent(deadline).send({
		from: MyLibrary.wallet,
		value: input_eth,
   		gasPrice: gasPrice,
		gasLimit: estimateGas, /* actual cost est is falling short, by about 1.5....ps this is different from gasPrice above which takes what it needs only */
	})
	.on('receipt', async function(receipt){//listen
		if(receipt.status == true){//1 also matches true
			console.log('Mined', receipt);//console.log('Transaction Success. Receipt status: '+receipt.status);console.log('Tx_hash: '+receipt.transactionHash) ;

			var tokens = receipt.events.BuyBack.returnValues[2];
			var tx_hash = receipt.transactionHash;
			var receivedTokens = (tokens / Math.pow(10, MyLibrary.decimals)).toFixed(2);
			var fixedETH = fromWeiToFixed8(input_eth);
			var outputCurrency = '';//or GUN - currency focus is outcome of Tx
			var type = 'success';//or error
			var wallet = '';
			
			var message = 'Bonfire Successful!';
			var nonTxAction = receivedTokens.toLocaleString() + ' tokens burnt {value: '+fixedETH+'bnb}';

			popupSuccess(type,outputCurrency,tx_hash,message,0,receivedTokens,wallet,nonTxAction);//async wont wait	//format: tx_hash, title, amounts{eth}, amountsT{tokens} - human readable amounts, wallet, NoTxAction perfomed
			port_bonfireWallet();
			fireBigEffect();			
		}
		else{
			console.log('Transaction Failed Receipt status: '+receipt.status);
			swal({title: "Failed.",type: "error",allowOutsideClick: true,confirmButtonColor: "#F27474",text: "Transaction Failed Receipt status: "+receipt.status});
		}
	})
	.on('confirmation', (confirmationNumber, receipt) => {
		if (confirmationNumber === 2) {
			console.log('tokens bought and burnt: '+receipt.events.BuyBack.returnValues[0]);
		}
	})
	.on('error', (error) => {//listen
		var text = error.message;
		swal({
			title: "Buy Back Failed.",
			type: "error",
			text: text,
			html: false,
			allowOutsideClick: true,
			confirmButtonColor: "#8e523c"
		});
	});
}
//Bonfire Success Effect
async function fireBigEffect(){
	$('#bonfireInput').val('');
	$('#bonfireCont').css('height', '160px');//bigger container
	$('#bornfire').css('top', '0px');//taller fire
	//reset all
	setTimeout( function() {
		$("#bonfireInput, #bonfireCont, #bornfire").removeAttr('style');
	}, 10000);
}
//Bornfire amount equiv
async function calcBonfire(){
	
	if(window.equateBonfire){clearTimeout(equateBonfire);}//so it searches when done typing
	if ($('#bonfireInput').val().length > 0){
		window.equateBonfire = setTimeout(async function() {
			var input_eth = $('#bonfireInput').val();
			if(input_eth == 0){return;}
			
			//toWei & Big Number inputs
			var input_eth = web3.utils.toWei(String(input_eth), 'ether'); 
			var input_eth = web3.utils.toBN(input_eth);

			var outputTokens = await tokenInst.methods.fetchSwapAmounts(input_eth, 1).call();
			var tokens = (outputTokens / Math.pow(10, MyLibrary.decimals));
			$('#burnTokenAmnt').empty().append(parseInt(tokens) + ' TOKENS');
		}, 2500);
	}
}

//ETH unrounded
function toFixed8_unrounded(amount) {
	//accepts decimals
	var parsed_eth = parseFloat(amount);
	var fixed = 8;//8 is good for all esp RBW
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return parsed_eth.toString().match(re)[0];
}
function fromWeiToFixed5_unrounded(amount) {//doesnt round up figures
	//accepts wei only not decimals, also no need to string wei
	var raw_eth = web3.utils.fromWei(amount, "ether");
	var parsed_eth = parseFloat(raw_eth);
	var fixed = 5;//6 is good for all esp RBW
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return parsed_eth.toString().match(re)[0];
}
function fromWeiToFixed8_unrounded(amount) {//doesnt round up figures
	//accepts wei only not decimals, also no need to string wei
	var raw_eth = web3.utils.fromWei(amount, "ether");
	var parsed_eth = parseFloat(raw_eth);
	var fixed = 8;
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return parsed_eth.toString().match(re)[0];
}
function fromWeiToFixed8(amount){
	var raw_eth = web3.utils.fromWei(amount, "ether");
	var parsed_eth = parseFloat(raw_eth);
	var ethFriendly = parsed_eth.toFixed(8);
	return ethFriendly;
}
function fromWeiToFixed12(amount){
	var raw_eth = web3.utils.fromWei(amount, "ether");
	var parsed_eth = parseFloat(raw_eth);
	var ethFriendly = parsed_eth.toFixed(12);
	return ethFriendly;
}
function fromWeiToFixed5(amount){
	var raw_eth = web3.utils.fromWei(amount, "ether");
	return raw_eth;
}