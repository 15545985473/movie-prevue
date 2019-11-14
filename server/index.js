const Koa = require("koa");
const ejs = require("ejs");
const { ejsTpl } = require("./tpl");

const app = new Koa();

app.use(async function(ctx, next) {
    ctx.body = ejs.render(ejsTpl, {
        name: "shuailp"
    });
});

app.listen(3000, function() {
    console.log("3000 port has been listenning");
});
