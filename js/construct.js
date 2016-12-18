window.onload = function() {
    class Test {
        constructor() {
            this.a = "123"
        }
    }

    const p = new Proxy(Test, {
        construct(target,args,newTarget) {
            console.log(newTarget)
            console.log(`class: ${target}:${JSON.stringify(args)}`);

            return {test: args}
        }
    })

    obj = new p("1","23");

    console.log(obj)
}