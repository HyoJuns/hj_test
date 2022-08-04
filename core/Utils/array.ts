import {HHashTable} from "../Array";

function arrayObjectToHashTable(_arrayObject : unknown | undefined) : HHashTable<any, any> {
    const hashTable = new HHashTable();

    if(_arrayObject === undefined) return hashTable

    if(Array.isArray(_arrayObject))
    {
        _arrayObject.forEach((item, idx) => {
            const keys = Object.keys(item);

            for(let i = 0; i < keys.length; i++)
            {
                hashTable.set(idx.toString(), keys[i], item[keys[i]])
            }
        })
    }

    return hashTable
}
export {
    arrayObjectToHashTable
}