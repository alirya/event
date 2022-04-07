import Callable from "@alirya/function/callable";
import Config from "./config/config";
import SortValueParameters from "@alirya/map/sort-value-parameters";
import Priority from "@alirya/map/priority";


export default class Event<Callback extends Callable, ConfigType extends Config = Config> extends Priority<Callback, ConfigType> {


    protected deleteOnce(key: Callback) {

        if(this.get(key)?.once) {

            this.delete(key);
        }

    }

    * [Symbol.iterator](): IterableIterator<[Callback, ConfigType]>{

        for (const data of super[Symbol.iterator]()) {

            yield data;

            this.deleteOnce(data[0]);
        }
    }


    entries(): IterableIterator<[Callback, ConfigType]> {

        return this[Symbol.iterator]();

    }

    forEach(callbackfn: (value: ConfigType, key: Callback, map: Event<Callback, ConfigType>) => void, thisArg?: any): void {

        return super.forEach((value, key, map : Event<Callback, ConfigType>) => {

            this.deleteOnce(key)
            callbackfn(value, key, map);

        }, thisArg);
    }

    * keys(): IterableIterator<Callback> {

        for (const [callback, config] of this) {

            yield callback;
        }
    }

    // values(): IterableIterator<ConfigType> {
    //
    //     this.rebuild();
    //     return super.values();
    // }
}