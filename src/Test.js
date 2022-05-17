

class Test {
    constructor(txt, TestMethod) {
        this.txt = txt;
        this.TestMethod = TestMethod;
        Test.all.push(this);
    }
    run = () => {
        console.log(this.txt);
    }
    static run = () => {
        Test.all.forEach(test => {
            test.run();
        });
    }
    static all = [];


}

module.exports.Test = Test;

