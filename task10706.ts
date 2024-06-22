function loggerWrapper<T extends (...args: any[]) =>any>(fn: T):(...args: Parameters<T>)=> ReturnType<T>{
    return function (...args: Parameters<T>): ReturnType<T>{
        console.log(`Calling function ${(fn as any).name} with arguements: ${JSON.stringify(args)}`);
        const result=fn(...args);
        console.log(`Function ${(fn as any).name} returned ${JSON.stringify(result)}`);
        return result;
    }
}

const add=(a:number, b: number):number=>{
    return a+b;
}

const loggedAdd=loggerWrapper(add);

const value=loggedAdd(3,5);

export {};