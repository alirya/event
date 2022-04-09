import Event from "../event";
import Callable from "@alirya/function/callable";
import Argument from "../../../function/dist/argument/argument";
import CallParameters from "./call-parameters";

export default function CallParameter<
    Callback extends Callable,
>(  {
        event,
        argument
    } : Argument<Parameters<Callback>> & {
        event : Event<Callback>
    }
) : ReturnType<Callback>[] {

    return CallParameters(event, ...argument);
}
