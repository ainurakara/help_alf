describe('Array Searcher', function() {
	beforeEach(function() {
		arr_searcher = new SearchArray();
	});

	it('should return [7,2] for a map: "..........\n..........\n..........\n.......X..\n..........\n..........\n"', function() {
		expect(arr_searcher.findSpaceship('..........\n..........\n..........\n.......X..\n..........\n..........\n')).toEqual([7,2]);
	});	
});


