const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(bodyParser.json());

app.use('/api', postRoutes);
app.use('/api', commentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });


app.listen(PORT, (err) => {
  if (err) {
    console.log("Error occured");
    process.exit(1);
  }
  console.log(`Listening on port ${PORT}`);
});