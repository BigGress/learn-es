window.onload = function() {
    const re = /foo/;

    re[Symbol.match] = (str) => {
        const that = this;
        console.log(str);

        return true
    }

    "aadasdsa".match(re)
}