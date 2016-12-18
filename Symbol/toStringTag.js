let obj = {}

obj[Symbol.toStringTag] = function() {
    return "GOGGO"
}

class Objtest {
    get [Symbol.toStringTag]() {
        return "GDSFGFDSGFD"
    }
}

let test = new Objtest();