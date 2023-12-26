import {PriorityValue} from "@axiona/set/priority.js";
import {OnceValue} from "@axiona/set/once.js";
import Callable from "@axiona/function/callable.js";

/**
 * Create Set witch {@see Priority}, and {@see Once} capabilities
 */
export default interface Set<
    Argument extends unknown[] = unknown[],
    Return extends unknown = unknown
> extends globalThis.Set<PriorityValue & OnceValue<Callable<Argument, Promise<any>|any>>> {
}
