'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/FirebaseController');

  // todoList Routes
  app.route('/send')
    .get(productsCtrl.get)
    .post(productsCtrl.post);

//   app.route('/products/:productId')
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
};
