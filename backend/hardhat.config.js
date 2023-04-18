require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const HTTP_URL = process.env.HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
//const POLYGON_SCAN_KEY = process.env.POLYGON_SCAN_KEY;

module.exports = {

  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: HTTP_URL,
      accounts: {
        mnemonic: PRIVATE_KEY,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
    },
  // etherscan: {
  //   apiKey: {
  //     polygonMumbai: POLYGON_SCAN_KEY,
  //   },
  // },
};
