var m = require('../../middleware');
var app = module.exports = require('express').Router();
var data = require('../../data/dummy');

app.get('/kitchen-sink'
, m.locals({
    items:  data.items
  , order:  data.order
  })
, m.view('routes/admin/views/kitchen-sink', {
    layout: 'routes/admin/views/kitchen-sink-layout'
  })
);