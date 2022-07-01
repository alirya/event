import Event from '../event';
import Callable from '@alirya/function/callable';
import Argument from '@alirya/function/argument/argument';

export function AsynchronousParameters<
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



export type AsynchronousArgument<Callback extends Callable> = Argument<Parameters<Callback>> & {
    event : Event<Callback>
};

export function AsynchronousParameter<
    Callback extends Callable,
>(  {
        event,
        argument
    } : AsynchronousArgument<Callback>
) : Promise<ReturnType<Callback>[]> {

    return AsynchronousParameters(event, ...argument);

}


namespace Asynchronous {
    export const Parameters = AsynchronousParameters;
    export const Parameter = AsynchronousParameter;
}
export default Asynchronous;
