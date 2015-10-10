"use strict"

function SampleController($El, Window) {
	this.$el = $El;
	this.window = Window;

	this.filePrefix = "file://data/";
	this.fileSuffix = ".txt";

	//this.bassIDs = this.readTextFile("Bass");
	
};

SampleController.prototype.readTextFile = function(file) {
	var file = this.filePrefix + file + this.fileSuffix;

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
};

SampleController.prototype.handleWindowResize = function() {
	
};