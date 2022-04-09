import Event from "../event";
import Callable from "@alirya/function/callable";

export default function CallParameters<
    Callback extends Callable,
>(
    event : Event<Callback>,
    ...argument : Parameters<Callback>
) : ReturnType<Callback>[]{

    const promises : ReturnType<Callback>[] = [];

    for (const callback of event) {

        promises.push(
            callback(...argument) as ReturnType<Callback>
        );
    }

    return promises;

}
