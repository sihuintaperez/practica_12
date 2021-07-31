const express = require('express');
const session=require('express-session');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(session({
    secret:'11',
    resave:true,
    saveUninitialized:true

}))
app.use(require('./routes/persona.js'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
