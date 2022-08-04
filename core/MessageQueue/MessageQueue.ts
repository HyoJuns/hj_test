import {HHashTable, HQueue} from "../Array";

type CallbackType = (callback: string, ...args: Array<any>) => void | Promise<void>

interface IMessageQueue<T> {
    messageQueue: HQueue<{key : string, message : string}>
    broker: HHashTable<CallbackType, {callback : CallbackType, args : Array<any>}>

    // 등록
    subscribe(key : string, id : string, callback : CallbackType) : void | Promise<void>

    // 등록해제
    unsubscribe(key : string) : void

    // 발행
    publish(key : string, message : string) : void

    // Queue Check
    queueCheck(key : string) : void
}

class MessageQueue<T> implements IMessageQueue<T>
{

    broker: HHashTable<CallbackType,{callback : CallbackType, args : Array<any>}>;
    messageQueue: HQueue<{key : string, message : string}>;

    constructor() {
        this.broker = new HHashTable<CallbackType,{callback : CallbackType, args : Array<any>}>();
        this.messageQueue = new HQueue<{key : string, message : string}>();
    }

    publish(key: string, message: string): void {
        this.messageQueue.enqueue({
            key : key,
            message : message
        })
        this.queueCheck(key)
    }

    subscribe(key: string, id : string ,callback: CallbackType,...args : Array<any>) : void | Promise<void> {
        this.broker.set(key, id, {
            callback : callback,
            args : args
        });
        return
    }

    unsubscribe(key: string): void {
        this.broker.removeKey(key)
    }

    queueCheck(key : string): void {
        let message = this.messageQueue.dequeue()
        while(message !== undefined)
        {
            const fields = this.broker.Fields(key)

            fields.forEach((field) => {
                const call = this.broker.get(key, field);

                if(typeof call !== 'undefined' )
                {
                    const args = call.args;
                    if(typeof message !== 'undefined')
                        call.callback(message.message,...args);
                    else
                        call.callback( '', ...args);
                }
            })


            message = this.messageQueue.dequeue()
        }
    }
}

export {
    MessageQueue
}