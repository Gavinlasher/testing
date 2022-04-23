const assert = require("chai").assert;
const app = require("../app")


let addNumbers = app.addNumbers(10, 10);



describe("App", function () {


  describe('helloWorld()', function () {
    it("this should return hello world", function () {
      assert.equal(app.helloWorld(), "hello world")
    })
    it("this is should not be undefined", function () {
      assert.exists(app.helloWorld(), "You passed...  nothing!?")
    })
  })
  describe("addNumbers()", function () {
    it("this should retrun a int", function () {
      assert.typeOf(addNumbers, "number", "returned a number")
    })
    it("addNumbers()", function () {
      assert.equal(app.addNumbers(), 20, "this is expecting 20")
    })
  })
})