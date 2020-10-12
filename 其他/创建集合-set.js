function test() {
    test.prototype.say=function () {
        console.log("test");
    }
}
function test1() {

}
test1.prototype=new test()
let Test1=new test1()
Test1.say();

