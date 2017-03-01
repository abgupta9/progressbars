"use strict"

describe('Data factory', function () {

    var barsData;

    beforeEach(angular.mock.module('dataService'));

    beforeEach(inject(function (_dataOp_) {
        barsData = _dataOp_;
    }));

    it('should exist', function () {
        expect(barsData).toBeDefined();
    });

    describe('.getProgBarData()', function () {
        // A simple test to verify the method all exists
        it('should exist', function () {
            expect(barsData.getProgBarData).toBeDefined();
        });
    });

});

