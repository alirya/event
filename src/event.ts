import Callable from "@alirya/function/callable";

export default interface Event<Callback extends Callable> extends Iterable<Callback> {

}
