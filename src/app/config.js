require('dotenv').config()

module.exports = {
  PORT: process.env.PORT,
  WEB3_URL: process.env.WEB3_URL || 'http://localhost:8545/',
  STOX_CONTRACT_ADDRESS: process.env.STOX_CONTRACT_ADDRESS,
  STOX_OWNER_ACCOUNT_ADDRESS: process.env.STOX_OWNER_ACCOUNT_ADDRESS,
  STOX_OWNER_ACCOUNT_PASSWORD: process.env.STOX_OWNER_ACCOUNT_PASSWORD || '',
  PREDICTION_OPERATOR_ACCOUNT_ADDRESS: process.env.PREDICTION_OPERATOR_ACCOUNT_ADDRESS,
  PREDICTION_OPERATOR_ACCOUNT_PASSWORD: process.env.PREDICTION_OPERATOR_ACCOUNT_PASSWORD || '',
  ORACLE_OPERATOR_ACCOUNT_ADDRESS: process.env.ORACLE_OPERATOR_ACCOUNT_ADDRESS,
  ORACLE_OPERATOR_ACCOUNT_PASSWORD: process.env.ORACLE_OPERATOR_ACCOUNT_PASSWORD || '',
  ORACLE_FACTORY_CONTRACT_ADDRESS: process.env.ORACLE_FACTORY_CONTRACT_ADDRESS,
  PREDICTION_FACTORY_CONTRACT_ADDRESS: process.env.PREDICTION_FACTORY_CONTRACT_ADDRESS,
  DEFAULT_ORACLE_CONTRACT_ADDRESS: process.env.DEFAULT_ORACLE_CONTRACT_ADDRESS,
  DEFAULT_ACCOUNT_PASSWORD: process.env.DEFAULT_ACCOUNT_PASSWORD || '',
}
