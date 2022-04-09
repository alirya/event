import Event from "../event";
import Callable from "@alirya/function/callable";

export default function AsynchronousParameters<
    Callback extends Callable,
>(
    event : Event<Callback>,
    ...argument : Parameters<Callback>
) : Promise<ReturnType<Callback>[]> {

    const promises : Promise<any>[] = [];

    for (const callback of event) {

        promises.push(
            Promise.resolve(callback(...argument))
        );
    }

    return Promise.all(promises);

}
