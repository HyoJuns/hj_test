import {IQueue} from "./IArray";


class HQueue<T> implements IQueue<T>
{
    private dataArr : Array<T>
    constructor() {
        this.dataArr = new Array<T>();
    }
    dequeue(): T | undefined {

        const result = this.dataArr.shift()
        if(typeof result === 'undefined')
        {
            return undefined
        }
        return  result as T
    }

    enqueue(item: T): void {
        this.dataArr.push(item);
    }

    size(): number {
        return this.dataArr.length
    }

}

export {HQueue}