function mapObject<T,K>(obj: T,callback: (value: T[keyof T], key: keyof T)=> K): Record<keyof T, K>{
    const mappedObject={} as Record<keyof T, K>;
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            mappedObject[key]=callback(obj[key],key);
        }
    }
    return mappedObject;
}

const obj={
    a:1,
    b:{
        c:2,
        d:3
    },
}

const mappedObj=mapObject(obj,(val,key)=>{
    return val*10;
});

export {};