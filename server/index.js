// index.js
const express = require('express');
const router = require('./routes/index.js'); // Use require for importing routes

const app = express();
const PORT = 3000;

//ETHEREUM INTERACTION

const { ethers } = require('ethers');
require('dotenv').config();

// Import just a few select items
import { BrowserProvider, parseUnits } from 'ethers';

// Import from a specific export
import { HDNodeWallet } from 'ethers/wallet';

const provider = new ethers.providers.JsonRpcProvider(
  process.env.RINKEBY_RPC_URL
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

app.get('/balance', async (req, res) => {
  const balance = await wallet.getBalance();
  res.send(ethers.utils.formatEther(balance));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
