window.onload = function() {
    const Ten = {
        [Symbol.toPrimitive](hint) {
            console.log(hint);
            switch(hint) {
                case "number":
                    return 10;
                case "string":
                    return "Ten";
                case "default":
                    return true;
            }
        }
    }

    class TestClass {
        [Symbol.toPrimitive](hint) {
            switch(hint) {
                case "number":
                    return 10;
                case "string":
                    return "Ten";
                case "default":
                    return true;
            }
        }
    }

    window.TestClass = new TestClass()
}