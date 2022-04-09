import Event from "../event";
import Callable from "@alirya/function/callable";
import Argument from "@alirya/function/argument/argument";
import AsynchronousParameters from "./asynchronous-parameters";

export default function AsynchronousParameter<
    Callback extends Callable,
>(  {
        event,
        argument
    } : Argument<Parameters<Callback>> & {
        event : Event<Callback>
    }
) : Promise<ReturnType<Callback>[]> {

    return AsynchronousParameters(event, ...argument)

}
