// test cases are described in fixtures.js
describe("myStringify", function(){
  it("should match the result of calling JSON.stringify", function(){
    arrayWithValidElements.forEach(function(obj){
      var result = myStringify(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

    objectWithInvalidAttributes.forEach(function(obj){
      var result = myStringify(obj);
      var expected = JSON.stringify(obj);
	  //console.log(result+"\n");
	  //console.log(expected);
      expect(result).toEqual(expected);
    });

  });
});

