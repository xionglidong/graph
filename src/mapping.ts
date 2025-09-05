import { Deposit as DepositEvent } from "../generated/ETHVault/ETHVault"
import { Deposit } from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let entity = new Deposit(id)

  entity.from = event.params.from
  entity.amount = event.params.amount
  entity.note = event.params.note
  entity.blockNumber = event.block.number
  entity.timestamp = event.block.timestamp
  entity.txHash = event.transaction.hash

  entity.save()
}
