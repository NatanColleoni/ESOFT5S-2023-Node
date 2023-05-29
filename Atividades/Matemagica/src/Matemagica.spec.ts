import {describe, expect, test} from '@jest/globals';
import {Matemagica} from './Matemagica'
import { ErrorMessages } from './Error';

describe('Testes no país da Matemagica', () => {
    test('Deve somar', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = Math.random()
        expect(mate.soma(x,y)).toBe(x+y)
    })

    test('Deve somar deve retornar erro', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = 'teste'
        expect(mate.soma(x,y)).toBe(ErrorMessages.INVALID_OPERATION)
    })

    test('Deve subtrair', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = Math.random()
        expect(mate.sub(x,y)).toBe(x-y)
    })

    test('Deve subtrair deve retornar erro', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = 'teste'
        expect(mate.sub(x,y)).toBe(ErrorMessages.INVALID_OPERATION)
    })

    test('Deve multiplicar', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = Math.random()
        expect(mate.multi(x,y)).toBe(x*y)
    })

    test('Deve multiplicar deve retornar erro', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = 'teste'
        expect(mate.multi(x,y)).toBe(ErrorMessages.INVALID_OPERATION)
    })

    test('Deve dividir', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = Math.random()
        expect(mate.div(x,y)).toBe(x/y)
    })

    test('Deve dividir deve retornar erro', () => {
        const mate = new Matemagica()
        const x = Math.random()
        const y = 'teste'
        expect(mate.div(x,y)).toBe(ErrorMessages.INVALID_OPERATION)
    })
})