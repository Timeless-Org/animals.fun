// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

interface IAnimalFun {
    // =============================================================
	//                           STORUCT
	// =============================================================

    struct Bet {
        uint amount;
        uint8 choice;
    }

    struct Market {
        string description;
        uint8 numberOfChoices;
        uint bettingEndTime;
        bool outcomeDecided;
        uint8 actualOutcome;
        mapping(address => Bet) bets;
        address[] bettors;
        uint[] totalBetsPerChoice;
        uint totalBets;
    }

    // =============================================================
    //                           EVENTS
    // =============================================================

    event MarketCreated(uint marketId, string description, uint8 numberOfChoices, uint bettingEndTime);
    event BetPlaced(uint marketId, address indexed bettor, uint amount, uint8 choice);
    event OutcomeDecided(uint marketId, uint8 outcome);
    event RewardClaimed(uint marketId, address indexed bettor, uint reward);

    // =============================================================
    //                           ERRORS
    // =============================================================

    error OnlyOwner();
    error MarketDoesNotExist();
    error BettingPeriodHasEnded();
    error OutcomeAlreadyDecided();
    error InvalidNumberOfChoices();
    error BetAmountMustBeGreaterThanZero();
    error BetAlreadyPlaced();
    error InvalidChoice();
    error InvalidOutcome();
    error OutcomeNotDecided();
    error NoBetPlaced();

    // =============================================================
	//                           WRITE FUNCTIONS
	// =============================================================

    function createMarket(string memory _description, uint8 _numberOfChoices, uint _bettingDuration) external;

    function placeBet(uint marketId, uint8 _choice) external payable;

    function decideOutcome(uint marketId, uint8 _outcome) external;

    function claimReward(uint marketId) external;

    // =============================================================
	//                           READ FUNCTIONS
	// =============================================================

    function markets(uint marketId) external view returns (
        string memory description,
        uint8 numberOfChoices,
        uint bettingEndTime,
        bool outcomeDecided,
        uint8 actualOutcome,
        uint totalBets
    );

    function getBettors(uint marketId) external view returns (address[] memory);

    function getTotalBetsPerChoice(uint marketId) external view returns (uint[] memory);

}
