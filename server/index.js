const Koa = require("koa");
const app = new Koa();
app.use(async function(ctx, next) {
    ctx.body = "电影预告pian网站";
});
app.listen(3000, function() {
    console.log("3000 port has been listenning");
});
