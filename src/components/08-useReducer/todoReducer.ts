export enum Action {
    ADD = "add",
    DELETE = "delete",
    TOGGLE = "toggle",
    TOGGLE_OLD = "toggle_old",
    EMPTY = "",
}
export type Todo =
    {
        id: string;
        desc: string;
        done: boolean;
    }

type ReducerTodo = { type: Action, payload: Todo };

export const todoReducer = (state: Todo[], action: ReducerTodo): Todo[] => {
    switch (action.type) {
        case Action.ADD:
            return [...state, action.payload];

        case Action.DELETE:
            return state.filter(todo => todo.id !== action.payload.id);

        case Action.TOGGLE:
            return state.map((todo) => (todo.id === action.payload.id) ? { ...todo, done: !todo.done } : todo);

        case Action.TOGGLE_OLD:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, done: !todo.done };
                } else {

                    return todo;
                }
            });
        default:
            return state;
    }
}