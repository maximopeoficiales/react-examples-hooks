import React from 'react'
import { Action, Todo, todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos, newTodo } from '../../fixtures/demoTodos';




describe('pruebas en TodoReducer.ts', () => {
    test('debe de retornar el state por defecto', () => {
        const state = todoReducer(demoTodos, { type: Action.EMPTY, payload: newTodo });
        expect(state).toEqual(demoTodos);
    })

    test('debe de agregar un nuevo todo correctamente', () => {
        const state = todoReducer(demoTodos, { type: Action.ADD, payload: newTodo });

        expect(state.length).toEqual(3);
        expect(state.find(e => e.id == "2")).toEqual(newTodo);
        // console.log(state);

    })

    test('debe de eliminar el todo 1', () => {
        const state = todoReducer(demoTodos, { type: Action.DELETE, payload: demoTodos[0] });

        expect(state.length).toEqual(1);
        expect(state.find(e => e.id == "1")).toBe(undefined);
        // console.log(state);
    })

    test('debe de realizarse el toggle el todo 1', () => {
        // por defecto esta en done
        let state = todoReducer(demoTodos, { type: Action.TOGGLE, payload: demoTodos[0] });

        expect(state.length).toEqual(2);
        expect(state.find(e => e.id == "1")?.done).toBeFalsy();
        state = todoReducer(state, { type: Action.TOGGLE, payload: demoTodos[0] });
        expect(state.find(e => e.id == "1")?.done).toBeTruthy();

    })

})