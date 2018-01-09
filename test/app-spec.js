var expect = require("chai").expect;
var tools = require("../lib/tools");
describe("printName()", function(){

    it("Should print the last name first", function(){

        var results = tools.printName({first: "Sal", last: "Allegra"});

        expect(results).to.equal("Allegra, Sal");

    });

});