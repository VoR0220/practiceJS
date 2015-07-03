var fs = require('fs')
var path = require('path')

var suffix = '.' + process.argv[3]

fs.readdir(process.argv[2], function callback (err, list){
	for (var i = 0; i < list.length; i++){
		if (path.extname(list[i]) == suffix)
			console.log(list[i])
	}

})