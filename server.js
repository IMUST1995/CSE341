
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

/* app.get("/", (req, res) => res.type('html').send(html)); */
app.use('/', require('./routes'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/* const html = `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <section>
      Zeir Braidi!
    </section>
  </body>
</html>
` */