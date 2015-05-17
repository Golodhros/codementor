!function() {
    var codementor = { version: '0.1.0' };

    // Charts
    codementor.chart = {};
    codementor.chart.bar = function() {

    };

     // Expose the package components
    if (typeof module === 'object' && module.exports) {
        // The package is loaded as a node module
        this.d3 = require('d3');
        module.exports = codementor;
    } else {
        // The file is loaded in the browser.
        this.codementor = codementor;
    }

}();