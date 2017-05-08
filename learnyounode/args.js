var args = process.argv;

var soma = 0;

for (var i = 2; i< args.length; i ++) {
	soma =  soma + (+ args[i]);
}

console.log(soma);