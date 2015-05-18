define(['jquery', 'd3', 'src/chart/bar'], function($, d3, Chart) {

    describe('Reusable barChart Test Suite', function(){
        var barChart, dataset, containerFixture, f;

        beforeEach(function(){
            // DOM Fixture Setup
            f = jasmine.getFixtures();
            containerFixture = d3.select('.test-container');
            f.load('testContainer.html');

        });

        afterEach(function(){
            containerFixture.remove();
            f = jasmine.getFixtures();
            f.cleanUp();
            f.clearCache();
        });

    });

});