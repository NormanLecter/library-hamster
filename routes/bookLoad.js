var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
var bibtexParse = require('bibtex-parse-js');

/* GET  */
router.get('/', function(req, res, next) {
  res.json({'test' : 'elo'});
});

/* LOAD FILE */
router.post('/', function(req, res, next) {
  let body = '';
  req.on('data', chunk => {
      body += chunk.toString();
  });
  req.on('end', () => {
      console.log(body);
      res.json({'dalo' : 'rade'});
  })
});

module.exports = router;
