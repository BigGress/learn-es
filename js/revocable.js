window.onload = function() {
    const obj = {
        foo:123,
    };

    const p = Proxy.revocable(obj,{
        get() {
            return 12
        }
    })
    const end = p.proxy;

    console.log(end.foo);
    // 解除所有的proxy
    p.revoke();
    console.log(end.foo);
}