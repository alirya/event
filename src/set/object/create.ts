import CreateSet from '../create.js';
import EventType from '../set.js';
import {List} from "ts-toolbelt";
import {Union} from "ts-toolbelt";

export default function Create<
    Container extends Record<any, EventType>,
    Keys extends Union.ListOf<keyof Container> = Union.ListOf<keyof Container>
>(...keys: Keys): Container & Record<List.UnionOf<Keys>, EventType> {

    const record : Partial<Container> = {};

    for(const key of keys) {

        record[key as keyof Container] = CreateSet() as Container[keyof Container];
    }

    return record as Container;

}

