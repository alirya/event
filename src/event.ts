import Callable from '@alirya/function/callable';
// TODO MOVE TO PROMISE??
export default interface Event<Callback extends Callable> extends Iterable<Callback> {

}
