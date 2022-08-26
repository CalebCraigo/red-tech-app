const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const publicPath = path.join(__dirname, '..', 'red-tech-app/build');

if(process.env.NODE_ENV ==="production") {
   app.use(express.static('build'));
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
   });
}
app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});