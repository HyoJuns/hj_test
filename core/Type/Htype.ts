
type TYPE = string

class HType
{
    /**
     * 타입
     * @private
     */
    private readonly type : TYPE;
    private readonly subtype : TYPE;

    constructor(_type : TYPE, _subtype : TYPE) {
        this.type = _type;
        this.subtype = _subtype
    }

    /**
     * 타입 반환
     */
    getType() : TYPE {return this.type;}
    getSubType() :TYPE {return this.subtype;}
}


export default HType;