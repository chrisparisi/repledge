const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const { sendFile } = require('express/lib/response');

const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1/link', require('./routes/plaidRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));

//Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
