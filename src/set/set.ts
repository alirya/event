import Priority, {PriorityValue} from "@alirya/set/priority";
import Once, {OnceValue} from "@alirya/set/once";
import Callable from "@alirya/function/callable";

/**
 * Create Set witch {@see Priority}, and {@see Once} capabilities
 */
export default interface Set<
    Argument extends unknown[] = unknown[],
    Return extends unknown = unknown
> extends globalThis.Set<PriorityValue & OnceValue<Callable<Argument, Promise<any>|any>>> {
}
