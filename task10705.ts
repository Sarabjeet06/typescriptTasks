function deepMerge<T>(source: Partial <T>,target: T): T{
    if(typeof source!=='object'||source==null|| typeof target !=='object'||target==null){
        throw new TypeError("Both obj1 and obj2 must be objects");
    }
    for(let key in source){
        if(source.hasOwnProperty(key)){
            if(typeof source[key]==='object'&&source[key]!==null){
                if(!target[key]){
                    target[key]=Array.isArray(source[key])?([] as any):({} as any);
                }
                target[key]=deepMerge(source[key],target[key]);
            }else if(typeof obj1[key]!==typeof obj2[key] ){
                throw new TypeError(`Type mismatch for key ${key} ${typeof target[key]} !== ${typeof source[key]} `);
            }
        }else{
            target[key]=source[key] as T[keyof T];
        }
    }
    return obj1;
}

const obj1 = {
    a: 2,
    b: {
      c: 2,
    }
  };
  
  const obj2 = {
    b: {
      i: 4
    },
    f: 5
  };
  
const merged=deepMerge(obj1,obj2);