function flatGet(user: object, name: string): any{
    for(let key in user){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(typeof user[key]==='object'&&user[key]!==null){
                flatGet(user[key],name);
            }
        }
    }
}

const user={
    a:1,
    b:2,
    c:{
        b:6,
        d:{
            e:4,
        }
    }
}

const value=flatGet(user,'a');

export {};