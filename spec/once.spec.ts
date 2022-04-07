import Shuffle from "@alirya/array/shuffle-parameters";
import Event from "../dist/event";
import Config from "../dist/config/config";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const result : string[] = [];

    const sortedResult = ['g', 'f', 'e', 'd', 'c', 'b', 'a'];

    const sorted : [()=>any, Config][] = [
        [()=>result.push('g'), {priority:7, once: true}],
        [()=>result.push('f'), {priority:6, once: true}],
        [()=>result.push('e'), {priority:5}],
        [()=>result.push('d'), {priority:4}],
        [()=>result.push('c'), {priority:3}],
        [()=>result.push('b'), {priority:2}],
        [()=>result.push('a'), {priority:1}]
    ];



    it('value', function() {

        const source = new Event<()=>any>(Shuffle(sorted));
        expect(source.size).toEqual(7);
        expect([...source.values()]).toEqual([{priority:7, once: true}, {priority:6, once: true}, {priority:5}, {priority:4}, {priority:3}, {priority:2}, {priority:1}]);
        expect(source.size).toEqual(7);
    });


    it('key', function() {

        result.length = 0;

        const source = new Event<()=>any>(Shuffle(sorted));

        expect(source.size).toEqual(7);

        [...source.keys()].map(callback=>callback());

        expect(source.size).toEqual(5);

        expect(result).toEqual(sortedResult);

    });


    it('entries', function() {

        result.length = 0;

        const source = new Event<()=>any>(Shuffle(sorted));

        expect(source.size).toEqual(7);

        [...source.entries()].map(([callback])=>callback());

        expect(source.size).toEqual(5);

        expect(result).toEqual(sortedResult);
    });

    it('forEach', function() {

        result.length = 0;

        const source = new Event<()=>any>(Shuffle(sorted));

        expect(source.size).toEqual(7);

        source.forEach((value, key) => {

            key();
        });

        expect(source.size).toEqual(5);

        expect(result).toEqual(sortedResult);
    });

    it('for', function() {

        result.length = 0;

        const source = new Event<()=>any>(Shuffle(sorted));

        expect(source.size).toEqual(7);

        for(const [value, priority] of source) {

            value();
        }

        expect(source.size).toEqual(5);

        expect(result).toEqual(sortedResult);
    });

});
