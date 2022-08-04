import {HMap} from "../Array";


function objectFilter (_object : any = {}, _array : Array<string> = []) : any | Promise<any>{
    const obj : any = {}

    if(_array.length <= 0) return obj;

    for(let i = 0; i < _array.length; i++)
    {
        if(typeof _object[_array[i]] !== 'undefined')
        {
            obj[_array[i]] = _object[_array[i]]
        }
    }

    return obj
}

function objectForEach(_object : any = {}, _func : (key : string, value : any, idx : number) => void) : void
{
    const keys : string[] = Object.keys(_object);

    for(let i = 0; i < keys.length; i++)
    {
        _func(keys[i], _object[keys[i]], i);
    }
}

function objectToMap(_object : any = {}) : Map<string, any>
{
    const newMap = new Map<string, any>();

    const keys : string[] = Object.keys(_object);

    for(let i = 0; i < keys.length; i++)
    {
        newMap.set(keys[i], _object[keys[i]]);
    }

    return newMap
}

function objectToHMap(_object : any = {}) : HMap<any>
{
    const newMap = new HMap<any>();

    const keys : string[] = Object.keys(_object);

    for(let i = 0; i < keys.length; i++)
    {
        newMap.set(keys[i], _object[keys[i]]);
    }

    return newMap
}



export {
    objectFilter,
    objectForEach,
    objectToMap,
    objectToHMap
}