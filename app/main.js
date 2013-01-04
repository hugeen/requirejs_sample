
// Configuration de RequireJS
require.config({
    paths: {
        underscore: '../libs/underscore/underscore-min',
        backbone: '../libs/backbone/backbone-min',
        libs: '../libs'
    },
    shim: {
        underscore: { exports: '_' }, // Exporter la variable globale _ en tant que module
        backbone: {
            deps: ['underscore'], // Underscore sera chargé avant Backbone
            exports: "Backbone" // Exporter la variable globale Backbone en tant que module
        }
    }
});

require([
    'app' // app/app.js
], function(App) {
    
    // Initialization de l'application
    App.initialize();
    
});
