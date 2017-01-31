class Tree {
    constructor() {
        return new Proxy({}, {
            get(target, prop) {
                if (!(prop in target)) {
                    target[prop] = new Tree();
                }
                return target[prop];
            }
        })
    }
}