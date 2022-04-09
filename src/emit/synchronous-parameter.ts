import Callable from "@alirya/function/callable";
import Event from "../event";
import Argument from "@alirya/function/argument/argument";
import SynchronousParameters from "./synchronous-parameters";

export default async function SynchronousParameter<
    Callback extends Callable,
>(  {
        event,
        argument
    } : Argument<Parameters<Callback>> & {
        event : Event<Callback>
    }
) : Promise<ReturnType<Callback>[]> {

    return SynchronousParameters(event, ...argument);

}
