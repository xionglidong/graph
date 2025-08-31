import {
  DataRetrieved as DataRetrievedEvent,
  DataStored as DataStoredEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/SimpleStorage/SimpleStorage"
import {
  DataRetrieved,
  DataStored,
  OwnershipTransferred
} from "../generated/schema"

export function handleDataRetrieved(event: DataRetrievedEvent): void {
  let entity = new DataRetrieved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requester = event.params.requester
  entity.data = event.params.data
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDataStored(event: DataStoredEvent): void {
  let entity = new DataStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.data = event.params.data
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
