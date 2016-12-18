window.onload = function() {
    function fun(a) {
        console.log("test" + a);
        return "ok"
    }
    const prox = new Proxy(fun, {
        apply(target,thisArg,args) {

            console.log(`Function:${target}:${thisArg}:${args}`);

            return target.call(thisArg,...args)
        }
    });

    console.log(prox("test123"))
}