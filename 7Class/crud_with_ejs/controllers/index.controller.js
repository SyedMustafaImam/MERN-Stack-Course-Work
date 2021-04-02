var express = require('express');
var router = express.Router();

exports.home = function(req, res, next) {
    res.render('index', { 
      page: 'Home',
      menuId:"Home" 
    });
  }


  exports.about = function(req, res, next) {
    res.render('about', { 
      page: 'ABOUT US',
      menuId:"About" 
    });
  }

  exports.contact = function(req, res, next) {
    res.render('contact', { 
      page: 'CONTACT US',
      menuId:"Contact" 
    });
  }

  

  exports.list = function(req, res, next) {
    res.render('list', { 
      page: 'PRODUCT LIST',
      menuId:"List" 
    });
  }
