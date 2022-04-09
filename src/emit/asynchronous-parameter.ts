import Event from "../event";
import Callable from "@alirya/function/callable";
import Argument from "../../../function/dist/argument/argument";
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
