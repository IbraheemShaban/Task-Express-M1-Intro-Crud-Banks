const express = require('express');
const router = express.Router();
const {
  fetchAccounts,
  createAccount,
  deleteAccount,
  modifyAccount,
} = require('./accounts.controllers');

router.get('/', fetchAccounts);

router.post('/', createAccount);

router.delete('/:accountId', deleteAccount);

router.put('/:accountId', modifyAccount);

module.exports = router;
