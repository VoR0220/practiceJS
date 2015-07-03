//console.log(process.argv); display array contents
//console.log(process.argv.length); display length of array
var i = 2
var sum = 0
while (i != process.argv.length){
	sum += Number(process.argv[i])
	i += 1
}
console.log(sum)