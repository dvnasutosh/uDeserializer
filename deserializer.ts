

interface endNode{
    key:string[]
    deserializer:Function
    returnType:string
    
}
function generic(raw:Object,endNodeList:endNode[]):any[] {
    const dataList:any[]=[]
    for(let [k,v] of Object.entries(raw)){
        if(typeof v=="object"){
            dataList.concat(generic(v,endNodeList))
        }
        for(let node of endNodeList){
            if (k in node.key){
                let value= node.deserializer(v)
                if (typeof value=== node.returnType) {
                    dataList.push(value);
                }
            }
        }
    }
    return dataList
}

