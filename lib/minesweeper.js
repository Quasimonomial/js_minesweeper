(function () {
	if (typeof Minesweeper === "undefined") {
		window.Minesweeper = {};
	}
	var Tile = Minesweeper.Tile = function(options){
		this.value = options.value
		this.status = 0 || options.status //0 for nothing, 1 for revealed, 2 for flagged
	};

	var Grid = Minesweeper.Grid = function(options){
		this.grid = {}
		this.width = options.width || 8
		this.height = options.height || 8
		this.mines = mines || 10

		//here we enforece a reasonable grid size
		if(this.width < 9){ this.width = 0; }
		if(this.height < 9){ this.height = 0; }
		if(this.width > 30){ this.width = 30; }
		if(this.height > 24){ this.height = 24; }

		//here we enforce that between 1 and 20 percent of tiles are mines, 
		var tileCount = this.height * this.width;
		var lowerBound = tileCount * 0.01
		var upperBound = tileCount * 0.20

		if(this.mines < lowerBound){this.mines = lowerBound}
		if(this.mines < 10){this.mines = 10}
		if(this.mines > upperBound){this.mines = upperBound}
	};

	Grid.prototype.generateGrid = function(){

	};

	Grid.prototype.layMines = function(){

	};

	Grid.prototype.generateTileValues = function(){

	};

	Grid.prototype.returnTile = function(x, y){
		//this may be a function that just changes the value of a tile at a position, I'm not sure yet
	}


})();