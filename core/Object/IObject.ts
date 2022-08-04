
import {CallbackObjectForType, CallbackType} from "../Common/ICallback";


interface IDataProcess<T>
{
    set : (key : string, data : T) => this;
    remove : (key: string) => this;
    Keys : () => Array<string>;
    Values : () => Array<T>;
    size : () => number;
}

interface IDataContain<T> extends IDataProcess<T>
{
    contain : (key : string) => boolean | Promise<boolean>

    find : (key : string) => T | Promise<T> | undefined

    findKey : (callback : CallbackType) => string | Promise<string>

}

interface IObject<T> extends IDataContain<T>
{
    each : (callback : CallbackObjectForType) => void;

    filterObject : (keys : Array<string>) => Array<T> | Promise<Array<T>>

    toObject : () => object;
}

export {
    IObject
}