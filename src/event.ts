import Callable from '@alirya/function/callable.js';
// TODO MOVE TO PROMISE??
export default interface Event<Callback extends Callable> extends Iterable<Callback> {

}
