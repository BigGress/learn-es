window.onload = function() {
    const obj = {a:111};
    const ob2 = new Proxy(obj, {
        get(target,prop) {
            console.log(`这个对象:${JSON.stringify(target)}:${prop}`)
            return "AAAA"
        },

        set(target,pro,value) {
            console.log(`这个对象:${JSON.stringify(target)}:${pro}:${value}`);

            return false
        }
    })

    console.log(ob2.a);

    ob2.b = "!23";

    console.log(ob2.b)
}