import {PriorityValue} from "@alirya/set/priority.js";
import {OnceValue} from "@alirya/set/once.js";
import Callable from "@alirya/function/callable.js";

/**
 * Create Set witch {@see Priority}, and {@see Once} capabilities
 */
export default interface Set<
    Argument extends unknown[] = unknown[],
    Return extends unknown = unknown
> extends globalThis.Set<PriorityValue & OnceValue<Callable<Argument, Promise<any>|any>>> {
}
