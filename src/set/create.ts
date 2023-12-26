import Priority from "@axiona/set/priority.js";
import Once from "@axiona/set/once.js";
import Set from './set.js';

/**
 * Create Set witch {@see Priority}, and {@see Once} capabilities
 */
export default function Create<
    Argument extends unknown[] = unknown[],
    Return extends unknown = unknown
>() : Set<Argument, Return> {

    return new Priority(new Once(new globalThis.Set()))
}
