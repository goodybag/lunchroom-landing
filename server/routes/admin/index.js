var m = require('../../middleware');
var app = module.exports = require('express').Router();

app.get('/kitchen-sink'
, m.locals({
    items:  [ { name: 'Pirata Dos Tacos'
              , price: 1090
              , dietTags: ['gluten-free', 'spicy']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Poop Taco Box'
              , price: 1200
              , dietTags: ['vegan', 'vegetarian']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Pirata Dos Tacos'
              , price: 1090
              , dietTags: []
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Poop Taco Box'
              , price: 1200
              , dietTags: ['gluten-free', 'spicy']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Poop Taco Box'
              , price: 1200
              , dietTags: ['gluten-free', 'spicy']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Pirata Dos Tacos'
              , price: 1090
              , dietTags: ['gluten-free', 'spicy']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Poop Taco Box'
              , price: 1200
              , dietTags: ['gluten-free', 'spicy']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Poop Taco Box'
              , price: 1200
              , dietTags: ['gluten-free', 'spicy']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            , { name: 'Pirata Dos Tacos'
              , price: 1090
              , dietTags: ['gluten-free', 'spicy']
              , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
              }
            ]

  , order: {
      items:  [ { name: 'Pirata Dos Tacos'
                , price: 1090
                , dietTags: ['gluten-free', 'spicy']
                , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
                , quantity: 1
                }
              , { name: 'Poop Taco Box'
                , price: 1200
                , dietTags: ['vegan', 'vegetarian']
                , coverPhotoUrl: 'https://cdn.filepicker.io/api/file/JEjlpwrGSrK4D9VjpHkc'
                , quantity: 1
                }
              ]
    }
  })
, m.view('routes/admin/views/kitchen-sink', {
    layout: 'routes/admin/views/kitchen-sink-layout'
  })
);