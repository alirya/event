import Shuffle from "@alirya/array/shuffle-parameters";
import Event from "../dist/event";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const result : string[] = [];

    const sortedResult = ['g', 'f', 'e', 'd', 'c', 'b', 'a'];

    const sorted : [()=>any, { priority: number }][] = [
        [()=>result.push('g'), {priority:7}],
        [()=>result.push('f'), {priority:6}],
        [()=>result.push('e'), {priority:5}],
        [()=>result.push('d'), {priority:4}],
        [()=>result.push('c'), {priority:3}],
        [()=>result.push('b'), {priority:2}],
        [()=>result.push('a'), {priority:1}]
    ];

    const source = new Event<()=>any>(Shuffle(sorted));

    it('value', function() {

        expect([...source.values()]).toEqual([{priority:7}, {priority:6}, {priority:5}, {priority:4}, {priority:3}, {priority:2}, {priority:1}]);
    });


    it('key', function() {

        result.length = 0;

        [...source.keys()].map(callback=>callback());

        expect(result).toEqual(sortedResult);

    });


    it('entries', function() {

        result.length = 0;

        [...source.entries()].map(([callback])=>callback());

        expect(result).toEqual(sortedResult);
    });

    it('forEach', function() {

        result.length = 0;

        source.forEach((value, key) => {

            key();
        });

        expect(result).toEqual(sortedResult);
    });

    it('for', function() {

        result.length = 0;

        for(const [value, priority] of source) {

            value();
        }

        expect(result).toEqual(sortedResult);
    });

});
