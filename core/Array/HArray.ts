import HType from "../Type/Htype";

class HArray<T> extends HType
{
    prevArr : Array<T>;
    arr : Array<T>;

    constructor(_type : string, _subtype : string) {
        super(_type, _subtype);
        this.prevArr = [];
        this.arr = [];
    }

    /**
     * 인덱스 번호로 데이터 반환
     * @param _index
     */
    Index(_index : number) : T | undefined
    {
        if(this.arr.length <= _index) { return undefined}

        return this.arr[_index]
    }

    /**
     * 배열 크기 반환
     */
    Size() : number
    {
        return this.arr.length;
    }

    /**
     * 배열 제거
     */
    Clear() : void{
        this.arr.length = 0
        return
    }
}





export {
    HArray
}