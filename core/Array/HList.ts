import {IArray} from "./IArray";
import {CallbackForType, CallbackType, CallbackUpdateType} from "../Common/ICallback";
import {HArray} from "./HArray";

class HList<T> extends HArray<T> implements IArray<T>
{

    constructor() {
        super('array', 'list');
    }


    add(data: T): this {
        this.arr.push(data);
        return this
    }

    remove(callback: CallbackType): this {
        if(this.arr.length <= 0) return this

        for(let i = 0; i < this.arr.length; i++)
        {
            if(callback(this.arr[i], i))
            {

                for(let j = i; j < this.arr.length - 1; j++)
                {
                    this.arr[j] = this.arr[j + 1]
                }
                this.arr.length = this.arr.length - 1
                return this;
            }
        }

        return this;
    }

    contain(callback: CallbackType): boolean | Promise<boolean> {
        if(this.arr.length <= 0) return false;

        for(let i = 0; i < this.arr.length; i++)
        {
            if(callback(this.arr[i], i)) return true
        }
        return false
    }

    clear() : void
    {
        this.arr.length = 0;
    }

    find(callback: CallbackType): T | undefined {
        if(this.arr.length <= 0) return undefined;

        for(let i = 0 ; i < this.arr.length; i++)
        {
            if(callback(this.arr[i], i)) return this.arr[i]
        }

        return undefined
    }

    findIndex(callback: CallbackType): number | Promise<number> {
        if(this.arr.length <= 0) return -1;

        for(let i = 0 ; i < this.arr.length; i++)
        {
            if(callback(this.arr[i], i)) return i
        }

        return -1
    }

    each(callback: CallbackForType): void {
        if(this.arr.length <= 0) return;

        for(let i = 0 ; i < this.arr.length; i++)
        {
            callback(this.arr[i], i);
        }
    }

    filter(callback : CallbackType) : Array<T>
    {
        if(this.arr.length <= 0) return []

        const output = []

        for(let i = 0; i < this.arr.length; i++)
        {
            if(callback(this.arr[i], i)) output.push(this.arr[i]);
        }

        return output
    }

    update(callback : CallbackUpdateType) : Array<T> | Promise<Array<T>>
    {
        if(this.arr.length <= 0) return this.arr
        this.prevArr.length = 0
        for(let i = 0; i < this.arr.length; i++)
        {
            this.prevArr.push(this.arr[i])

            this.arr[i] = callback(this.arr[i], i)
        }

        return this.arr
    }

    rollback() : void
    {
        if(this.prevArr.length <= 0) return

        this.arr.length = 0
        for(let i = 0; i < this.prevArr.length; i++)
        {
            this.arr.push(this.prevArr[i])
        }
    }

    toArray() : Array<T>
    {
        return this.arr
    }

}

export {HList}