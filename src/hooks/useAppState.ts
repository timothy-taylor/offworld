import { useMemo, useReducer } from "react";
import { P, match } from "ts-pattern";

type AppState = {
    settings: boolean;
    help: boolean;
    x: number;
    y: number;
};

type Incoming = {
    [K in keyof AppState]?: AppState[K];
};

const reducer = (state: AppState, incoming: Incoming) =>
    match(incoming)
        .returnType<AppState>()
        .with({ settings: P.boolean }, ({ settings }) => ({
            ...state,
            settings,
        }))
        .with({ help: P.boolean }, ({ help }) => ({
            ...state,
            help,
        }))
        .with({ x: P.number, y: P.number }, ({ x, y }) => ({
            ...state,
            x,
            y,
        }))
        .otherwise(() => ({ ...state }));

export const useAppState = () => {
    const store = useReducer(reducer, {
        settings: false,
        help: false,
        //
        // mouse coordinates
        x: 0,
        y: 0,
    });

    return useMemo(() => store, [store]);
};
