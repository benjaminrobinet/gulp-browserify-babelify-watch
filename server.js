let express = require('express');
let app = express();
app.listen(8080);
app.use('/', express.static('www'));
app.use('/dist', express.static('dist'));