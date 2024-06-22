type DefinedProperties <T>= {
    [K in keyof T]-?: Exclude<T[K], undefined>;
}

interface User{
    age?: number,
    name: string|null,
}

type DefineExmaple = DefinedProperties<User>;

const user: DefineExmaple={
    age:1,
    name: "abcd",
}

export {};
