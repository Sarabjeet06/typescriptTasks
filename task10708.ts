function updateObject<T, K extends keyof T>(obj: T, keys: K[]): Pick<T,K>{
    const result= {} as Pick<T,K>;
    keys.forEach((key)=>{
        result[key]=obj[key];
    })
    return result;
}

const obj = { a: 1, b: 'hello', c: true };
// const updated = updateObject(obj, ['b', 'world']); //will not work as type of key will not match

const updated = updateObject(obj, ['b', 'c']);
