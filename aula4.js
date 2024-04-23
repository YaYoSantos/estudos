const elements = ['fogo', 'terrra', 'ar', 'agua'];

console.log(elements)
console.log(elements[1])

const pessoaObj = {
    name: 'liz webster',
    age: 18,
    rank: 'SS',
    elements: 'snow',
    ocupation: [
        '10º posto na decanto',
        'ex mebro dos templarios',
        'professora de combate corpo a corpo'
    ]

}

console.log(pessoaObj)
console.log(pessoaObj.name)

const findeelments = elements.find(function(elements){

    if(elements === 'fogo'){
        return true;
    }
    return false;
    
})

console.log(findeelments);

const findelementsdois = elements.find(elements => elements === 'ar')
console.log(findelementsdois);//esta escrevendo o elento

const findelementstres = elements.findIndex(elements => elements === 'ar')
console.log(findelementstres);//esta dando a posiçao do elemento

if(findelementstres > -1){
    console.log('ar é um elemento')
}else{
    console.log('ar nao é um elemento')
}

pessoaObj.age = 17
console.log(pessoaObj.age)//muda a idade em pessoaObj


//adiciona uma nova "classe" para o obj
pessoaObjwithgender = {
    ...pessoaObj,
    gender: 'feminino'
}

console.log(pessoaObjwithgender)










