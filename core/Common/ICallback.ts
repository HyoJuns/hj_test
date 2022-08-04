
type CallbackType = (elem : any, idx : number) => boolean | Promise<boolean>;
type CallbackForType = (elem : any, idx : number) => void;
type CallbackObjectForType = (key : string, value : any, idx : number) => void;
type CallbackUpdateType = (elem : any, idx : number) => any

export {
    CallbackType,
    CallbackForType,
    CallbackObjectForType,
    CallbackUpdateType
}