window.onload = function() {
    const obj = {
        a:123
    };

    const p = new Proxy(obj, {
        get(tar,pro) {
            if (!(pro in tar)) {
                tar[pro] = p
            }

            return tar[pro]
        }
    })

    p.test.test.test.a = "kana";

    console.log(p.test.test.test.a);

    console.log(p);

    // console.log(JSON.stringify(p))


    class Tres {
        constructor() {
            return new Proxy({}, {
                get(a,pro) {
                    if (!(pro in a)) {
                        a[pro] = new Tres();
                    }

                    return a[pro]
                }
            })
        }
    }

    const test = new Tres();

    console.log(test.a.a.a.a.a = "!234");

    console.log(test)

}