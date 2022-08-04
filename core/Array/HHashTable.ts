import {HArray} from "./HArray";
import {IHashMap} from "./IArray";
import {CallbackObjectForType} from "../Common/ICallback";
import {HObject} from "../Object/HObject";
import {HMap} from "./HMap";


type KEY = string;
type FIELD = string;

class HHashTable<T, T2> extends HArray<T> implements IHashMap<T, T2>
{
    data : HMap<HObject<T2>>;

    constructor() {
        super('array', 'hashtable');
        this.data = new HMap<HObject<T2>>();
    }

    Fields(key : KEY): Array<FIELD> {

        const fields = this.data.get(key)

        if(typeof fields === 'undefined')
        {
            return []
        }

        return fields.Keys();
    }

    Keys(): Array<KEY> {
        return this.data.Keys();
    }

    clear(): void {
        this.data.clear();
    }

    each(key : KEY, callback: CallbackObjectForType): void {

        if(this.data.has(key))
        {
            const fields = this.data.get(key)
            const keys = fields?.Keys();

            if(keys === undefined){return;}

            for(let i = 0 ; i < keys.length; i++)
            {
                callback(keys[i], fields?.find(keys[i]), i);
            }

        }
    }

    get(key: KEY, field: FIELD): T2 | undefined {
        if(!this.data.has(key)) return undefined;

        const fields = this.data.get(key);

        const isField = fields?.contain(field);
        if(typeof isField === 'undefined') return undefined;

        return fields?.find(field);

    }

    hasField(key: KEY, field: FIELD): boolean {
        if(!this.data.has(key)) return false;

        const fields = this.data.get(key);

        const isField = fields?.contain(field)

        if(typeof isField === 'undefined') return false;

        return !!isField
    }

    hasKey(key: KEY): boolean {
        return this.data.has(key);
    }

    removeField(key: KEY, field: FIELD): this {
        if(this.data.has(key))
        {
            const result = this.data.get(key);

            result?.remove(field)

        }

        return this;
    }

    removeKey(key: KEY): this {
        this.data.remove(key);
        return this;
    }

    set(key: KEY, field: FIELD, data: T2): this {

        if(this.data.has(key))
        {
            const result = this.data.get(key);

            result?.set(field, data);
            return this;
        }
        else
        {
            const obj = new HObject<T2>();
            obj.set(field, data);
            this.data.set(key, obj);
            return this;
        }
    }

    sizeField(key : KEY): number {
        if(!this.data.has(key)) return 0;

        const result = this.data.get(key);

        if(typeof result === 'undefined')
        {
            return 0;
        }
        else
        {
            return result.size();
        }
    }

    sizeKey(): number {
        return this.data.size();
    }

}

export {HHashTable}