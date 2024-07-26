/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    AnimalFun: {
      address: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimReward",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createMarket",
          inputs: [
            {
              name: "_description",
              type: "string",
              internalType: "string",
            },
            {
              name: "_numberOfChoices",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "_bettingDuration",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "decideOutcome",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_outcome",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getBettors",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTotalBetsPerChoice",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "marketCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "markets",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "description",
              type: "string",
              internalType: "string",
            },
            {
              name: "numberOfChoices",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "bettingEndTime",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "outcomeDecided",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "actualOutcome",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "totalBets",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "placeBet",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_choice",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "BetPlaced",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "bettor",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "choice",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "MarketCreated",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "description",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "numberOfChoices",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
            {
              name: "bettingEndTime",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OutcomeDecided",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "outcome",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardClaimed",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "bettor",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "BetAlreadyPlaced",
          inputs: [],
        },
        {
          type: "error",
          name: "BetAmountMustBeGreaterThanZero",
          inputs: [],
        },
        {
          type: "error",
          name: "BettingPeriodHasEnded",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidChoice",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidNumberOfChoices",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidOutcome",
          inputs: [],
        },
        {
          type: "error",
          name: "MarketDoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "NoBetPlaced",
          inputs: [],
        },
        {
          type: "error",
          name: "OnlyOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "OutcomeAlreadyDecided",
          inputs: [],
        },
        {
          type: "error",
          name: "OutcomeNotDecided",
          inputs: [],
        },
      ],
      inheritedFunctions: {
        claimReward: "contracts/interfaces/IAnimalFun.sol",
        createMarket: "contracts/interfaces/IAnimalFun.sol",
        decideOutcome: "contracts/interfaces/IAnimalFun.sol",
        getBettors: "contracts/interfaces/IAnimalFun.sol",
        getTotalBetsPerChoice: "contracts/interfaces/IAnimalFun.sol",
        markets: "contracts/interfaces/IAnimalFun.sol",
        placeBet: "contracts/interfaces/IAnimalFun.sol",
      },
    },
  },
  84532: {
    AnimalFun: {
      address: "0x8208ced2932973f71eff272e7f02ddd4582e6096",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimReward",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createMarket",
          inputs: [
            {
              name: "_description",
              type: "string",
              internalType: "string",
            },
            {
              name: "_numberOfChoices",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "_bettingDuration",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "decideOutcome",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_outcome",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getBettors",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTotalBetsPerChoice",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "marketCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "markets",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "description",
              type: "string",
              internalType: "string",
            },
            {
              name: "numberOfChoices",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "bettingEndTime",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "outcomeDecided",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "actualOutcome",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "totalBets",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "placeBet",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_choice",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "BetPlaced",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "bettor",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "choice",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "MarketCreated",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "description",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "numberOfChoices",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
            {
              name: "bettingEndTime",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OutcomeDecided",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "outcome",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardClaimed",
          inputs: [
            {
              name: "marketId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "bettor",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "BetAlreadyPlaced",
          inputs: [],
        },
        {
          type: "error",
          name: "BetAmountMustBeGreaterThanZero",
          inputs: [],
        },
        {
          type: "error",
          name: "BettingPeriodHasEnded",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidChoice",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidNumberOfChoices",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidOutcome",
          inputs: [],
        },
        {
          type: "error",
          name: "MarketDoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "NoBetPlaced",
          inputs: [],
        },
        {
          type: "error",
          name: "OnlyOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "OutcomeAlreadyDecided",
          inputs: [],
        },
        {
          type: "error",
          name: "OutcomeNotDecided",
          inputs: [],
        },
      ],
      inheritedFunctions: {
        claimReward: "contracts/interfaces/IAnimalFun.sol",
        createMarket: "contracts/interfaces/IAnimalFun.sol",
        decideOutcome: "contracts/interfaces/IAnimalFun.sol",
        getBettors: "contracts/interfaces/IAnimalFun.sol",
        getTotalBetsPerChoice: "contracts/interfaces/IAnimalFun.sol",
        markets: "contracts/interfaces/IAnimalFun.sol",
        placeBet: "contracts/interfaces/IAnimalFun.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
