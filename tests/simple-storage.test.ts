import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DataRetrieved } from "../generated/schema"
import { DataRetrieved as DataRetrievedEvent } from "../generated/SimpleStorage/SimpleStorage"
import { handleDataRetrieved } from "../src/simple-storage"
import { createDataRetrievedEvent } from "./simple-storage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requester = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let data = "Example string value"
    let timestamp = BigInt.fromI32(234)
    let newDataRetrievedEvent = createDataRetrievedEvent(
      requester,
      data,
      timestamp
    )
    handleDataRetrieved(newDataRetrievedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("DataRetrieved created and stored", () => {
    assert.entityCount("DataRetrieved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DataRetrieved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requester",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DataRetrieved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "data",
      "Example string value"
    )
    assert.fieldEquals(
      "DataRetrieved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
