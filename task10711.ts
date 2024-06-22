type User={
    firstName: string,
    lastName: string,
    age: number,
}

const transformKeys =(user:User , {firstName, lastName})=>{
    user[firstName]=user.firstName;
    user[lastName]=user.lastName;
    delete user[user.firstName];
    delete user[user.lastName];
}

const user={
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
}

const keys={
    firstName: "first", 
    lastName: "last"
}

const transformUser=transformKeys(user,{
    firstName: "first", 
    lastName: "last"
});
console.log(user);

export {}