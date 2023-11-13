import { Reducer } from "redux";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import settingsReducer from "./reducers/settings";
import { weatherApi } from "../services/weather";
import { errorHandlerMiddleware } from "./middlewares/errorHandler";

const reducers = {
    [weatherApi.reducerPath]: weatherApi.reducer,
    settingsReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
    return combinedReducer(state, action);
};

const persistConfig = {
    key: "root",
    storage,
    blacklist: [weatherApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const defaultMiddlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });

        const customMiddlewares = [weatherApi.middleware, errorHandlerMiddleware];

        return [...defaultMiddlewares, ...customMiddlewares];
    },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
