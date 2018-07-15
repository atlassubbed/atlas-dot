const { describe, it } = require("mocha")
const { expect } = require("chai")
const dot = require("../src/dot")

describe("dot", function(){
  it("should compute the dot product between two arrays", function(){
    expect(dot([1,2],[3,4])).to.equal(11);
  })
  it("should compute the dot product of a single array with itself", function(){
    expect(dot([1,2])).to.equal(5)
  })
})
