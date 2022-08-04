import {HList, HMap, HHashTable} from "./Array";
import {HObject} from "./Object/HObject";
import {MessageQueue} from "./MessageQueue";
import {objectFilter, objectForEach, objectToHMap, objectToMap, arrayObjectToHashTable} from "./Utils";

// Browser 전용
// (function(window : Window){
//     // @ts-ignore
//     window.$$ = {
//         List : HList,
//         Map : HMap,
//         HashTable : HHashTable,
//         Object : HObject,
//         MessageQueue : MessageQueue,
//         Utils : {
//             objFilterKey : objectFilter,
//             objForEach : objectForEach,
//             objToMap : objectToMap,
//             objToHMap : objectToHMap,
//             arrObjToHashTable : arrayObjectToHashTable
//         }
//     }
//
// })(window)


// Server 전용
const $$ = {
    List : HList,
    Map : HMap,
    HashTable : HHashTable,
    Object : HObject,
    MessageQueue : MessageQueue,
    Utils : {
        objFilterKey : objectFilter,
        objForEach : objectForEach,
        objToMap : objectToMap,
        objToHMap : objectToHMap,
        arrObjToHashTable : arrayObjectToHashTable
    }
}

export default $$