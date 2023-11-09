import { Reducer } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import appReducer from "./reducers/settings";
import { errorHandlerMiddleware } from "./middlewares/errorHandler";
import { WEATHER_API_REDUCER_KEY, weatherApi } from "../services/weather";
import { FIND_CITY_API_REDUCER_KEY, findCityApi } from "../services/city";

const reducers = {
    [FIND_CITY_API_REDUCER_KEY]: findCityApi.reducer,
    [WEATHER_API_REDUCER_KEY]: weatherApi.reducer,
    appReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([findCityApi.middleware, weatherApi.middleware, errorHandlerMiddleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
