window.onload = function() {
    class myTest {
        constructor() {

        }

        [Symbol.iterator]() {
            return {
                count: 1,
                next() {
                    this.count++;
                    if (this.count <= 3) {
                        return {
                            value: this.count,
                            done: false
                        } 
                    } else {
                        return {
                            value: "end",
                            done: true
                        }
                    }
                }
            }
        }
    }

    let test = new myTest();

    myTest[Symbol.iterator] = () => {
                return {
                    haa:1,
                    next() {
                        this.haa++;
                        if (this.haa <=3) {
                            return {
                                value: "ok",
                                done: false
                            }
                        } else {
                            return {
                                value: "go",
                                done: true
                            }
                        }
                    }
                }
            }

    console.dir(myTest);
    console.log(test)

    for(let i of myTest) {
        console.log(i)
    }

    for(let i of test) {
        console.log(i);
    }
}