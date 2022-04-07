import Callable from "@alirya/function/callable";
import Config from "../config/config";

export default async function Synchronous<
    Callback extends Callable,
    ConfigType extends Config
>(
    event : Iterable<[Callback, ConfigType]>,
    ...argument : Parameters<Callback>
) : Promise<ReturnType<Callback>[]> {

    const promises : ReturnType<Callback>[] = [];

    for (const [callback] of event) {

        const returns : ReturnType<Callback> = await callback(...argument) as ReturnType<Callback>;

        promises.push(returns);
    }

    return promises;

}
