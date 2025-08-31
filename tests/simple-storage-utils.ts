import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DataRetrieved,
  DataStored,
  OwnershipTransferred
} from "../generated/SimpleStorage/SimpleStorage"

export function createDataRetrievedEvent(
  requester: Address,
  data: string,
  timestamp: BigInt
): DataRetrieved {
  let dataRetrievedEvent = changetype<DataRetrieved>(newMockEvent())

  dataRetrievedEvent.parameters = new Array()

  dataRetrievedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  dataRetrievedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )
  dataRetrievedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return dataRetrievedEvent
}

export function createDataStoredEvent(
  owner: Address,
  data: string,
  timestamp: BigInt
): DataStored {
  let dataStoredEvent = changetype<DataStored>(newMockEvent())

  dataStoredEvent.parameters = new Array()

  dataStoredEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  dataStoredEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )
  dataStoredEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return dataStoredEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
