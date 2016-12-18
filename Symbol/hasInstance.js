window.onload = function() {
    var a = {
        [Symbol.hasInstance]() {
            console.log("hasInstance");
            return false
        }
    }

    class Foo {
        static [Symbol.hasInstance]() {
            console.log("hasInstance");
            return false
        }
    }

    console.dir(Foo)

    console.log({} instanceof Foo);
}