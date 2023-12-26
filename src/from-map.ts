import Callable from '@axiona/function/callable.js';

export default function FromMap<Callback extends Callable>(map : Map<unknown, Callback>) : Iterable<Callback> {

    return map.values();
}
