console.log('eu sou yael')

//variavel verdadeiro ou falço
var isEnable = true
var test='false'

console.log(isEnable)
console.log(test)

//array 

var names = ['felipe','marcos', 'matheus'];

console.log(names)
console.log(names[1])

names.push('rafaela')

console.log(names[3])
console.log(names.length)//mostra quantos tem dentro do array

var teams = new Array();
teams.push('Brazil')
console.log(teams)


//IF - condicional

//apenas if
function testname(name){
    if (name.length > 10){
        return 'nome grande'
    }
}


//conta letras do nome
console.log(testname('yael hudson m santos'))

function qtdletras(name){
    return name.length
}

console.log(qtdletras('yael hudson m santos'))


//if e else
function nomepqn(name){
    if (name.length > 10){
        return 'nome grande'
    }else{
        return'nome pequeno'
    }
}

console.log(nomepqn('yael'))

function isequal(name){
    if(name==='miguel'){
        return 'é ihgual a miguel'
    }else if (name=== 'maria'){
        return 'é igual a maria'
    }else{
        return 'n é igual a nada'
    }
}

console.log(isequal('yael'))
console.log(isequal('miguel'))
console.log(isequal('maria'))
