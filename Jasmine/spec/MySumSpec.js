describe("MySum", function(){
	it("should Return 5 for numbers 3 and 2", function(){
		expect(mysum(3, 2))
		.toEqual(5);
	});
	it("should Return 9.6 for numbers 5.5 and 4.1", function(){
		expect(mysum(5.5, 4.1))
		.toEqual(9.6);
	});
});