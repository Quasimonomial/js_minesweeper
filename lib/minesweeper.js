(function () {
	if (typeof Minesweeper === "undefined") {
		window.Minesweeper = {};
	}
	var Tile = Minesweeper.tile = function(options){
		this.value = options.value
		this.status = 0 || options.status //0 for nothing, 1 for revealed, 2 for flagged
	};

	
})();