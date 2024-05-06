describe('Array Searcher', function() {
	beforeEach(function() {
		arr_searcher = new SearchArray();
	});

	it('should return [7,2] for a map: "..........\n..........\n..........\n.......X..\n..........\n..........\n"', function() {
		expect(arr_searcher.findSpaceship('..........\n..........\n..........\n.......X..\n..........\n..........\n')).toEqual([7,2]);
	});

	it('should return [0,0] for a map: "X.........\n"', function() {
		expect(arr_searcher.findSpaceship('X.........\n')).toEqual([0,0]);
	});

	it('should return [0,9] for a map: ".........X\n"', function() {
		expect(arr_searcher.findSpaceship('.........X\n')).toEqual([0,9]);
	});

	it('should return [Spaceship lost forever] for a map: ".........."', function() {
		expect(arr_searcher.findSpaceship('..........')).toEqual("Spaceship lost forever");
	});

	it('should return [Spaceship lost forever] for a map: ""', function() {
		expect(arr_searcher.findSpaceship('')).toEqual("Spaceship lost forever");
	});


});


