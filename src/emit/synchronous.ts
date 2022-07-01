import Callable from '@alirya/function/callable';
import Event from '../event';
import Argument from '@alirya/function/argument/argument';

export async function SynchronousParameters<
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

export type SynchronousArgument<Callback extends Callable> = Argument<Parameters<Callback>> & {
    event : Event<Callback>
};


export async function SynchronousParameter<
    Callback extends Callable,
>(  {
        event,
        argument
    } : SynchronousArgument<Callback>
) : Promise<ReturnType<Callback>[]> {

    return SynchronousParameters(event, ...argument);

}


namespace Synchronous {
    export const Parameters = SynchronousParameters;
    export const Parameter = SynchronousParameter;
    export type Argument<Callback extends Callable> = SynchronousArgument<Callback>;
}
export default Synchronous;
