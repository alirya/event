import CreateSet from "../create";
import EventType from "../set";
import {List} from "ts-toolbelt";
import {Union} from "ts-toolbelt";

export default function Create<
    Container extends Record<any, EventType>,
    Keys extends PropertyKey[] = PropertyKey[],
>(
    ...keys : Union.ListOf<keyof Container>
) : Container & Record<List.UnionOf<Keys>, EventType> {

    const record : Partial<Container> = {};

    for(const key of keys) {

        record[key as keyof Container] = CreateSet() as Container[keyof Container];
    }

    return record as Container;

}

