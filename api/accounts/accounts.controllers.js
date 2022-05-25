let accounts = require('../../accounts');

exports.fetchAccounts = (req, res) => {
  res.status(200).json(accounts);
};

exports.createAccount = (req, res) => {
  const id = accounts[accounts.length - 1].id + 1;
  const funds = 0;
  const newAccount = { id, ...req.body, funds };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
};

exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  if (accounts.some((account) => account.id === +accountId) === false) {
    res.status(404).send('Account Not Found');
  } else {
    accounts = accounts.filter((account) => account.id !== +accountId);
    res.status(202).json(accounts);
  }
};

exports.modifyAccount = (req, res) => {
  let { accountId } = req.params;
  accountId = +accountId;
  if (accounts.some((account) => account.id === accountId) === false) {
    res.status(404).send('Account Not Found');
  } else {
    accounts[
      accounts.indexOf(accounts.find((account) => account.id === accountId))
    ] = { id: accountId, ...req.body };
    res.status(201).json(accounts);
  }
};
