
// 通过子进程调用 capture.js 

let cp = require("child_process");
let {resolve} = require("path");

(async () => {
    let script = resolve(__dirname, "./capture.js");
    let child = cp.fork(script, []);
    let invoked = false;

    child.on("error", err => {
        if(invoked) return 
        invoked = true
    })
    child.on("exit", code => {
        if(invoked) return;
        invoked = false;
        let err = code === 0 ? null: new Error("Exit err" + code);
        console.log(err)
    })
    child.on("message", msg => {
        let result = msg.result
        console.log(msg)
    })
})()

 