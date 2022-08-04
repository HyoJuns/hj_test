import {IMap} from "./IArray";
import {HArray} from "./HArray";
import { CallbackObjectForType} from "../Common/ICallback";
type KEY = string;
class HMap<T> extends HArray<T> implements IMap<T>
{

    data : Map<KEY,T>;

    constructor() {
        super('array', 'map');
        this.data = new Map<KEY, T>();
    }
    Keys(): Array<KEY> {
        const arr : KEY[] = []

        for(let k of this.data.keys())
        {
            arr.push(k)
        }

        return arr
    }

    Values(): Array<T> {
        const arr : T[] = []

        for(let k of this.data.values())
        {
            arr.push(k)
        }

        return arr
    }

    clear(): void {
        this.data.clear();
    }

    each(callback: CallbackObjectForType): void {
        if(this.data.size <= 0) return;

        let idx = 0
        for(let [k, v] of this.data)
        {
            callback(k, v, idx)
            idx += 1;
        }
    }

    has(key: KEY): boolean {
        return this.data.has(key);
    }

    remove(key: KEY): this {
        this.data.delete(key);
        return this;
    }

    set(key: KEY, data: T): this {
        this.data.set(key, data);
        return this;
    }

    get(key: KEY): T | undefined {
        return this.data.get(key);
    }

    size(): number {
        return this.data.size;
    }

}

export {HMap}