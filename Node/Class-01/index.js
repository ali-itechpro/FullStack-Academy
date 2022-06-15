// importing http method
const http =require('http');

//creating the handler for req and res
const handler=(req, res)=>{
        //res.write("Node API request");
        //res.end();
        //console.log(req.url)
        switch(req.url)
        {
            case "/":
                res.write("Node API");
                break;

            case "/products":
                res.write("List of products");
                break;

            case "/books":
                const books=[{id:1, name:"Javascript", price:10, inStock:true},
                             {id:1, name:"NodeJs", price:20, inStock:false},
                             {id:1, name:"ReactJs", price:30, inStock:true},]
                res.write(JSON.stringify(books));
                break;

            default:
                res.write("Page not found");
                break;
        }
        res.end();
}


//creatig server object
const server= http.createServer(handler);

//create server
server.listen(3000,()=>{
    console.log("server is running on port 3000")
});
