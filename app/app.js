define([
    'my_module' // app/my_module.js
], function(myModule) {

    var initialize = function() {
        // Appel d'une fonction de app/my_module.js
        myModule.renderHtml();
    };

    return {
        initialize: initialize // Export de la fonction initialize sur le module app
    };

});
