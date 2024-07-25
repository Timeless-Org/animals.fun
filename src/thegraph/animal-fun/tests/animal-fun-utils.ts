import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BetPlaced,
  MarketCreated,
  OutcomeDecided,
  RewardClaimed
} from "../generated/AnimalFun/AnimalFun"

export function createBetPlacedEvent(
  marketId: BigInt,
  bettor: Address,
  amount: BigInt,
  choice: i32
): BetPlaced {
  let betPlacedEvent = changetype<BetPlaced>(newMockEvent())

  betPlacedEvent.parameters = new Array()

  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("bettor", ethereum.Value.fromAddress(bettor))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "choice",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(choice))
    )
  )

  return betPlacedEvent
}

export function createMarketCreatedEvent(
  marketId: BigInt,
  description: string,
  numberOfChoices: i32,
  bettingEndTime: BigInt
): MarketCreated {
  let marketCreatedEvent = changetype<MarketCreated>(newMockEvent())

  marketCreatedEvent.parameters = new Array()

  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfChoices",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(numberOfChoices))
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "bettingEndTime",
      ethereum.Value.fromUnsignedBigInt(bettingEndTime)
    )
  )

  return marketCreatedEvent
}

export function createOutcomeDecidedEvent(
  marketId: BigInt,
  outcome: i32
): OutcomeDecided {
  let outcomeDecidedEvent = changetype<OutcomeDecided>(newMockEvent())

  outcomeDecidedEvent.parameters = new Array()

  outcomeDecidedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  outcomeDecidedEvent.parameters.push(
    new ethereum.EventParam(
      "outcome",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(outcome))
    )
  )

  return outcomeDecidedEvent
}

export function createRewardClaimedEvent(
  marketId: BigInt,
  bettor: Address,
  reward: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("bettor", ethereum.Value.fromAddress(bettor))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return rewardClaimedEvent
}
