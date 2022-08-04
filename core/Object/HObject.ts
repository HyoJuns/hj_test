import {IObject} from "./IObject";
import {CallbackObjectForType, CallbackType} from "../Common/ICallback";


class HObject<T> implements IObject<T>
{
    obj : Map<string, any>

    constructor() {
        this.obj = new Map<string, T>();
    }

    Keys(): Array<string> {
        const arr = []
        for(let k of this.obj.keys())
            arr.push(k);

        return arr
    }

    Values(): Array<T> {
        const arr = []
        for(let v of this.obj.values())
            arr.push(v);

        return arr
    }

    contain(key: string): boolean | Promise<boolean> {
        return this.obj.has(key)
    }

    each(callback: CallbackObjectForType): void {
        if(this.obj.size <= 0) return
        let idx = 0
        this.obj.forEach((value, key) => {
            callback(key, value, idx);
            idx += 1;
        })
    }

    filterObject(keys: Array<string>): Array<T> | Promise<Array<T>> {
        if(this.obj.size <= 0) return []

        const output: any[] | Promise<any[]> = []

        this.obj.forEach((value, key) => {
            for(let i = 0; i < keys.length; i++)
            {
                if(keys[i] === key)
                {
                    output.push({
                        key : key,
                        value : value
                    })
                    break
                }
            }
        })

        return output
    }

    find(key: string): T | undefined {
        return this.obj.get(key)
    }

    findKey(callback: CallbackType): string | Promise<string> {
        let idx = 0;
        let key = ''
        for(let [k,v] of this.obj)
        {
            if(callback(v, idx))
            {
                key = k;
                break
            }
            idx += 1;
        }
        return key
    }

    remove(key: string): this {
        this.obj.delete(key)
        return this;
    }

    set(key: string, data: T): this {
        this.obj.set(key, data)
        return this;
    }

    size(): number {
        return this.obj.size
    }

    toObject(): object {
        const result : any = {}
        this.obj.forEach((value, key) => {
            result[key] = value
        })

        return result
    }

}


export {
    HObject
}