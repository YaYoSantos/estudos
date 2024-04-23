
function testvariables(){
    //let deve usar quando pode sofrer alteraçoes
    let name = 'felipe'
    console.log(name);
    name = 'marcos'
    console.log(name);
}

testvariables();

function testglobal(){
    //deve usar quando a variavel n vai sofrer alteraçoes
    const name = 'gustavo'
    console.log(name)
}

testglobal();

const imprimenome = (nome) => console.log(nome)
imprimenome('ander')