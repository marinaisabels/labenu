##   Exercício 1 
a)

    interface  User {
    
    nome:  string,
    
    saldo:  number
    
    }

b) 

    export  function  performPurchase(user:  User, value:  number):  User  |  undefined {
    
    if(user.saldo  >=  value) {
    
    return {
    
    ...user,
    
    saldo:  user.saldo  -  value  //não entendi porque -value
    
    }
    
    }
    
    return  undefined
    
    }

## Exercício 2

a) 

    describe("Testando performPurchase", () => {
    
    test("O saldo deverá ser maior do que o valor da compra", ()=> {
    
    const  user:  User  = {
    
    nome:  "Ana",
    
    saldo:  50
    
    }
    
      
    
    const  result  =  performPurchase(user, 30)
    
    expect(result).toEqual({
    
    ...user,
    
    saldo:  30
    
    })
    
    })

b) 

    test("O saldo deverá ser igual ao valor da compra", ()=> {
    
    const  user:  User  = {
    
    nome:  "Ana",
    
    saldo:  50
    
    }
    
      
    
    const  result  =  performPurchase(user, 50)
    
    expect(result).toEqual({
    
    ...user,
    
    saldo:  50
    
    })
    
    })

c) 

    test("O saldo deverá ser menor do que o valor da compra", ()=> {
    
    const  user:  User  = {
    
    nome:  "Ana",
    
    saldo:  50
    
    }
    
      
    
    const  result  =  performPurchase(user, 50)
    
    expect(result).toEqual({
    
    ...user,
    
    saldo:  80
    
    })
    
    })

## Exercício 3

Não consegui fazer a função, tive dificuldades em implementar o "For of",não sei como e nem porque colocar nesta função.

## Exercício 4

a) 

    describe("Testing verifyAge", () => {
    
    test("brazilian allowed", ()=> {
    
    const  user:  User  = {
    
    name:  "Ana",
    
    age:  20,
    
    nacionality:  NACIONALITY.BRAZILIAN
    
    }
    
      
    
    const  casino:  Casino  = {
    
    name:"Casino",
    
    location:  LOCATION.BRAZIL,
    
    }
    
      
    
    const  result  =  verifyAge(casino, [user])
    
    expect(result.brazilians.allowed).toEqual(["Ana"])
    
    })

b) 

    test("brazilian allowed", ()=> {
    
    const  user:  User  = {
    
    name:  "Jose",
    
    age:  20,
    
    nacionality:  NACIONALITY.AMERICAN
    
    }
    
      
    
    const  casino:  Casino  = {
    
    name:"Casino",
    
    location:  LOCATION.BRAZIL,
    
    }
    
      
    
    const  result  =  verifyAge(casino, [user])
    
    expect(result.brazilians.allowed).toEqual(["Jose"])
    
    })

c) 

    test("brazilian and americans unallowed", ()=> {
    
    const  american:  User  = {
    
    name:  "Juan",
    
    age:  19,
    
    nacionality:  NACIONALITY.AMERICAN
    
    }
    
    const  brazilian:  User  = {
    
    name:  "Maria",
    
    age:  19,
    
    nacionality:  NACIONALITY.BRAZILIAN
    
    }
    
    const  casino:  Casino  = {
    
    name:"Casino",
    
    location:  LOCATION.BRAZIL,
    
    }
    
      
    
    const  result  =  verifyAge(casino, [american, brazilian])
    
    expect(result.brazilians.unallowed).toEqual(["Juan", "Maria"])
    
    expect(result.americans.unallowed).toEqual(["Juan", "Maria"])
    
    })

d) 

    test("brazilian and americans unallowed", ()=> {
    
    const  american:  User  = {
    
    name:  "Juan",
    
    age:  21,
    
    nacionality:  NACIONALITY.AMERICAN
    
    }
    
    const  american2:  User  = {
    
    name:  "Juan2",
    
    age:  21,
    
    nacionality:  NACIONALITY.AMERICAN
    
    }
    
    const  brazilian:  User  = {
    
    name:  "Maria",
    
    age:  19,
    
    nacionality:  NACIONALITY.BRAZILIAN
    
    }
    
    const  brazilian2:  User  = {
    
    name:  "Maria2",
    
    age:  19,
    
    nacionality:  NACIONALITY.BRAZILIAN
    
    }
    
    const  casino:  Casino  = {
    
    name:"Casino",
    
    location:  LOCATION.EUA,
    
    }
    
      
    
    const  result  =  verifyAge(casino, [american, brazilian, american2, brazilian2])
    
    expect(result.brazilians.unallowed).toEqual(["Maria2", "Maria"])
    
    expect(result.americans.allowed).toEqual(["Juan", "Juan2"])
    
    })


