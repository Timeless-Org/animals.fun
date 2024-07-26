// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {IAnimalFun} from "./interfaces/IAnimalFun.sol";

contract AnimalFun is IAnimalFun {
    // =============================================================
    //                           STORAGE
    // =============================================================

    address public owner;
    uint public marketCount;
    mapping(uint => Market) public markets;

    // =============================================================
    //                           MODIFIERS
    // =============================================================

    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert OnlyOwner();
        }
        _;
    }

    modifier marketExists(uint marketId) {
        if (marketId >= marketCount) {
            revert MarketDoesNotExist();
        }
        _;
    }

    modifier beforeBettingEnd(uint marketId) {
        if (block.timestamp >= markets[marketId].bettingEndTime) {
            revert BettingPeriodHasEnded();
        }
        _;
    }

    modifier outcomeNotDecided(uint marketId) {
        if (markets[marketId].outcomeDecided) {
            revert OutcomeAlreadyDecided();
        }
        _;
    }

    // =============================================================
    //                           CONSTRUCTOR
    // =============================================================

    constructor() {
        owner = msg.sender;
    }

    // =============================================================
    //                           WRITE FUNCTIONS
    // =============================================================

    function createMarket(
        string memory _description,
        uint8 _numberOfChoices,
        uint _bettingDuration
    ) external onlyOwner {
        if (_numberOfChoices < 2 || _numberOfChoices > 4) {
            revert InvalidNumberOfChoices();
        }

        Market storage newMarket = markets[marketCount];
        newMarket.description = _description;
        newMarket.numberOfChoices = _numberOfChoices;
        newMarket.bettingEndTime = block.timestamp + _bettingDuration;
        newMarket.totalBetsPerChoice = new uint[](_numberOfChoices);

        emit MarketCreated(
            marketCount,
            _description,
            _numberOfChoices,
            newMarket.bettingEndTime
        );

        marketCount++;
    }

    function placeBet(
        uint marketId,
        uint8 _choice
    ) external payable marketExists(marketId) beforeBettingEnd(marketId) {
        Market storage market = markets[marketId];
        if (msg.value == 0) {
            revert BetAmountMustBeGreaterThanZero();
        }
        if (market.bets[msg.sender].amount != 0) {
            revert BetAlreadyPlaced();
        }
        if (_choice >= market.numberOfChoices) {
            revert InvalidChoice();
        }

        market.bets[msg.sender] = Bet(msg.value, _choice);
        market.bettors.push(msg.sender);
        market.totalBets += msg.value;
        market.totalBetsPerChoice[_choice] += msg.value;

        emit BetPlaced(marketId, msg.sender, msg.value, _choice);
    }

    function decideOutcome(
        uint marketId,
        uint8 _outcome
    ) external onlyOwner marketExists(marketId) outcomeNotDecided(marketId) {
        Market storage market = markets[marketId];
        if (_outcome >= market.numberOfChoices) {
            revert InvalidOutcome();
        }

        market.actualOutcome = _outcome;
        market.outcomeDecided = true;

        emit OutcomeDecided(marketId, _outcome);
    }

    function claimReward(uint marketId) external marketExists(marketId) {
        Market storage market = markets[marketId];
        if (!market.outcomeDecided) {
            revert OutcomeNotDecided();
        }
        Bet memory bet = market.bets[msg.sender];
        if (bet.amount == 0) {
            revert NoBetPlaced();
        }

        if (bet.choice == market.actualOutcome) {
            uint reward = (bet.amount * market.totalBets) /
                market.totalBetsPerChoice[market.actualOutcome];
            payable(msg.sender).transfer(reward);

            emit RewardClaimed(marketId, msg.sender, reward);
        }

        delete market.bets[msg.sender];
    }

    // =============================================================
    //                           READ FUNCTIONS
    // =============================================================

    function getBettors(
        uint marketId
    ) external view marketExists(marketId) returns (address[] memory) {
        return markets[marketId].bettors;
    }

    function getTotalBetsPerChoice(
        uint marketId
    ) external view marketExists(marketId) returns (uint[] memory) {
        return markets[marketId].totalBetsPerChoice;
    }
}
