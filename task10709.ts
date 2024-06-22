type DefinedProperties <T>= {
    [K in keyof T]-?: T[K] extends object? DefinedProperties<T[K]>: NonNullable<T[K]>;
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