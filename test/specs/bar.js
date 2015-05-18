describe('Reusable barChart Test Suite', function(){

    beforeEach(function(){
        // DOM Fixture Setup
        f = jasmine.getFixtures();
        f.fixturesPath = 'base/test/fixtures/';
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