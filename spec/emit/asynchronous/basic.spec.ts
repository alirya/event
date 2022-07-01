import MapPromises from '../map-promises';
import AsynchronousParameters from '../../../dist/emit/asynchronous';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('test', function() {

    const results : number[] = [];

    it('value', function(done) {

        const source = AsynchronousParameters.Parameters(MapPromises(results,750, 250, 500, 0).values());

        source.then(()=>{

            expect(results).toEqual([0, 250, 500, 750]);
            done();
        });

    });

});
