import MapPromises from '../map-promises';
import SynchronousParameters from '../../../dist/emit/synchronous';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('test', function() {

    const results : number[] = [];

    it('value', function(done) {

        const source = SynchronousParameters.Parameters(MapPromises(results,750, 250, 500, 0).values());

        source.then(()=>{

            expect(results).toEqual([750, 250, 500, 0]);
            done();
        });

    });

});
