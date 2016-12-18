window.onload = function() {
    const a = {a: 123}
    const obj = new Proxy(a, {
        has(tar,pro) {
            console.log(tar,pro);
            return true
        }
    })

    console.log("ab" in obj)
}