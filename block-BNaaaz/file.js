let http = require("http");
let fs = require("fs");
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  fs.createReadStream("./readme.text").pipe(content);
}
server.listen(4000, () => {
  console.log("listning on port 4000");
});
