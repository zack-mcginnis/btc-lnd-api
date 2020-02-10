// API setup
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors())

const routes = require('./routes/index')
app.use('/api/btc', routes.btc_router)
app.use('/api/lnd', routes.lnd_router)
app.use('/api/info', routes.info_router)

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`BTC / LND API running on port ${PORT}`));