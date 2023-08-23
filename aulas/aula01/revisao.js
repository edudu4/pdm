//##variavel
const numero = 10;
numero = 20;

const frutas = [];
frutas.push("banana");

const pessoa = {id: 1, nome: "Eduardo"};
pessoa.sexo = 'M';
pessoa = {id:2, nome: "Maria"}; // erro

let cont = 0;

//##funcoes
const soma = (a,b) => a+b;

const App = () => <View></View>;

//##propagacao

//frutas.push(["uva","maca"])
// resultado - ["banana", {"uva","maca"}]

frutas.push(...["uva", "maca"])
// resultado - ["banana", "uva", "maca"]


//##desestruturacao
const {id, nome} = pessoa;
// resultado - id: 1
// resultado - nome: "Eduardo"

//modulos
export default pessoa;

export {frutas, soma};

import pessoa from 'revisao';

import { frutas } from 'revisao';

import { View } from 'react-native';