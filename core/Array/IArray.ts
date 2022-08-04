import {CallbackForType, CallbackObjectForType, CallbackType, CallbackUpdateType} from "../Common/ICallback";
type KEY = string;
type FIELD = string;

interface IDataProcess<T>
{
    /**
     * 데이터를 추가
     * @param data {any}
     */
    add : (data : T) => this

    /**
     * 특정 조건에 맞는 데이터를 제거
     * @param callback {function}
     */
    remove : (callback : CallbackType) => this
}

interface IDataContain<T> extends IDataProcess<T>
{
    /**
     * 데이터가 있는지 여부
     * @param callback
     */
    contain : (callback : CallbackType) => boolean | Promise<boolean>

    /**
     * 데이터를 찾아서 반환한다.
     * @param callback
     */
    find : (callback : CallbackType) => T | Promise<T> | undefined

    /**
     * 데이터를 찾으면 찾은 인덱스 값을 반환한다.
     * @param callback
     */
    findIndex : (callback : CallbackType) => number | Promise<number>
}


interface IArray<T> extends IDataContain<T>
{
    /**
     * 반복문
     * @param callback
     */
    each : (callback : CallbackForType) => void;

    filter : (callback : CallbackType) => Array<T>;

    // UPDATE
    update : (callback : CallbackUpdateType) => Array<T> | Promise<Array<T>>;

    // 이전 값으로 되돌린다.
    rollback : () => void;

    toArray : () => Array<T>;

    clear : () => void;
}


interface IMap<T>
{
    set : (key : KEY, data : T) => this;
    remove : (key : KEY) => this;
    has : (key : KEY) => boolean;
    size : () => number;
    Keys : () => Array<KEY>;
    Values : () => Array<T>;

    each : (callback : CallbackObjectForType) => void;

    get : (key : KEY) => T | undefined;

    clear : () => void;
}

interface IHashMap<T, T2>
{
    set : (key : KEY, field : FIELD, data : T2) => this;
    get : (key : KEY, field : FIELD) => T2 | undefined;

    removeField : (key : KEY, field : FIELD) => this;
    removeKey : (key : KEY) => this;

    hasKey : (key : KEY) => boolean;
    hasField : (key : KEY, field : FIELD) => boolean;

    sizeKey : () => number;
    sizeField : (key : KEY) => number;

    Keys : () => Array<KEY>;
    Fields : (key : KEY) => Array<FIELD>;

    each : (key : KEY, callback : CallbackForType) => void;

    clear : () => void;
}

interface IQueue<T>
{
    enqueue(item : T) : void;
    dequeue() : T | undefined
    size() : number
}

export {
    IArray,
    IMap,
    IHashMap,
    IQueue
}