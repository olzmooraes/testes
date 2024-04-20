import {Vetor} from '../src/Vetor'

describe('Vetor',()=>{
    let vetor : Vetor;
    beforeEach(()=>{
        vetor = new Vetor();
    });
    it('deve somar os elementos do vetor',()=>{
    vetor.adicionar(4);
    vetor.adicionar(12);
    vetor.adicionar(8);
    vetor.adicionar(9);
    expect(vetor.somarVetor()).toBe(33);
    })
    it('deve buscar o maior valor do vetor', ()=>{
        vetor.adicionar(-100);
        vetor.adicionar(23);
        vetor.adicionar(65);
        vetor.adicionar(5);
        expect(vetor.buscarMaior()).toBe(65);
        expect(vetor.buscarMaior()).not.toBe(-100);
    })
    it('deve realizar a média do vetor',()=>{
        vetor.adicionar(1);
        vetor.adicionar(2);
        vetor.adicionar(3);
        vetor.adicionar(4);
        expect(vetor.buscarMedia()).toBe(2.5);
    })
})