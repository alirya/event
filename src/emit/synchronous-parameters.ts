import Callable from "@alirya/function/callable";
import Event from "../event";

export default async function SynchronousParameters<
    Callback extends Callable,
>(
    event : Event<Callback>,
    ...argument : Parameters<Callback>
) : Promise<ReturnType<Callback>[]> {

    const returns : ReturnType<Callback>[] = [];

    for (const callback of event) {

        returns.push(
            await callback(...argument) as ReturnType<Callback>
        );
    }

    return returns;

}
