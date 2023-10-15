const fs = require("fs");

const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;
if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><Button type="submit">SEND</Button></form>');

    // Add this placeholder to display the message
    const message = fs.readFileSync("message.txt", "utf8");
    console.log("message", message);
    if (message) {
      console.log('kjfndijvjk')
      res.write(`<div>Message: ${message}</div>`);
    }

    res.write("</body></html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (c) => {
      body.push(c);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, ()=>{
        res.setHeader("Location", "/");
        res.statusCode = 302;
        res.end();
      });
    });
  }
}

module.exports = requestHandler;