let Koa = require("koa");
let router = require("koa-router")();
let logger = require("koa-logger");
let bodyParser = require("koa-bodyparser");

let app = new Koa();

// app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.use(logger())
router.get('/', (ctx, next) => {
   ctx.body =  `<h1>Index</h1>
   <form action="/login" method="post">
       <p>Name: <input name="name" value="koa"></p>
       <p>Password: <input name="password" type="password"></p>
       <p><input type="submit" value="Submit"></p>
   </form>`;
})

router.post("/login", (ctx, next) => {
    let name = ctx.request || ''
    console.log(name)
    ctx.body = "Login"
})

router.get('/user', async (ctx, next) => {
    let url = ctx.url;
    let request = ctx.request;
    let req_query = request.query.name;
    let req_queryString = request.queryString;

    console.log(request.require)
 
    ctx.body={
        url,
        req_query
       
    }
})


app.listen(3000, function() {
    console.log("3000 port has be lintenning~")
}) 

