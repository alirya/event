import {ShuffleParameters} from '@axiona/array/shuffle.js';
import Once, {OnceValue} from '@axiona/set/once.js';
import Priority, {PriorityValue} from '@axiona/set/priority.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    type Type = OnceValue<string> & PriorityValue<string>;

    const result : string[] = [];

    const sortedResult = ['g', 'f', 'e', 'd', 'c', 'b', 'a'];

    const sortedPersistence : Type[] = [
        {value:'e', priority:5},
        {value:'d', priority:4},
        {value:'c', priority:3},
        {value:'b', priority:2},
        {value:'a', priority:1},
    ];

    const sortedOnce : Type[] = [
        {value:'g', priority:7, once: true},
        {value:'f', priority:6, once: true},
    ];

    const sorted : Type[] = [...sortedOnce, ...sortedPersistence];



    it('value', function() {

        const source = new Priority(new Once(new Set<Type>(ShuffleParameters(sorted))));
        expect(source.size).toEqual(7);

        expect([...source.values()]).toEqual(sorted);

        expect(source.size).toEqual(5);

        expect([...source.values()]).toEqual(sortedPersistence);
    });



    it('key', function() {

        const source = new Priority(new Once(new Set<Type>(ShuffleParameters(sorted))));
        expect(source.size).toEqual(7);

        expect([...source.keys()]).toEqual(sorted);

        expect(source.size).toEqual(5);

        expect([...source.keys()]).toEqual(sortedPersistence);
    });


    it('entries', function() {

        const source = new Priority(new Once(new Set<Type>(ShuffleParameters(sorted))));
        expect(source.size).toEqual(7);

        expect([...source.entries()]).toEqual(sorted.map(value=>[value, value]));

        expect(source.size).toEqual(5);

        expect([...source.entries()]).toEqual(sortedPersistence.map(value=>[value, value]));
    });

    it('forEach', function() {

        const source = new Priority(new Once(new Set<Type>(ShuffleParameters(sorted))));
        expect(source.size).toEqual(7);

        {
            const result : [OnceValue<string>, OnceValue<string>][] = [];
            source.forEach((value, key) => {

                result.push([value, key]);
            });
            expect(result).toEqual(sorted.map(value=>[value, value]));
        }

        expect(source.size).toEqual(5);

        {
            const result : [OnceValue<string>, OnceValue<string>][] = [];
            source.forEach((value, key) => {

                result.push([value, key]);
            });
            expect(result).toEqual(sortedPersistence.map(value=>[value, value]));
        }
    });

    it('for', function() {

        const source = new Priority(new Once(new Set<Type>(ShuffleParameters(sorted))));
        expect(source.size).toEqual(7);

        {
            const result : OnceValue<string>[] = [];
            for(const value of source) {

                result.push(value);
            }
            expect(result).toEqual(sorted);
        }

        expect(source.size).toEqual(5);

        {
            const result : OnceValue<string>[] = [];
            for(const value of source) {

                result.push(value);
            }
            expect(result).toEqual(sortedPersistence);
        }
    });

});
