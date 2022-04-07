import Event from "../event";
import Callable from "@alirya/function/callable";
import Config from "../config/config";

export default function Asynchronous<
    Callback extends Callable,
    ConfigType extends Config
>(
    event : Iterable<[Callback, ConfigType]>,
    ...argument : Parameters<Callback>
) : Promise<ReturnType<Callback>[]> {

    const promises : Promise<any>[] = [];

    for (const [callback] of event) {

        promises.push(
            Promise.resolve(callback(...argument))
        );
    }

    return Promise.all(promises);

}
