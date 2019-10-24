const express = require('express');
console.log('test');

const app = express();
app.use(express.static('docs'));

app.listen(8080, function() {
  console.log('Example app listening on port 8080');
});
