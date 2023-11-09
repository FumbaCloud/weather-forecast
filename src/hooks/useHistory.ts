import { useEffect, useState } from "react";

import { Weather } from "../services/weather/types";
import { settingsSlice } from "../stores/reducers/settings";
import { useTypedDispatch, useTypedSelector } from "../stores/store";

export const LOCAL_STORAGE_SEARCH_HISTORY = "search-history";

const useHistory = () => {
    const { history } = useTypedSelector((state) => state.appReducer);
    const { addToHistory } = settingsSlice.actions;
    const dispatch = useTypedDispatch();

    const [list, setList] = useState<number[]>([]);

    const historyAdd = (city: Weather) => {
        const historyToStore = [city, ...history.filter((storedCity) => storedCity.id !== city.id)];

        dispatch(addToHistory(historyToStore));
        localStorage.setItem(LOCAL_STORAGE_SEARCH_HISTORY, JSON.stringify(historyToStore));
    };

    const historyRemove = (id: number) => {
        const historyToStore = history.filter((storedCity) => storedCity.id !== id);

        dispatch(addToHistory(historyToStore));
        localStorage.setItem(LOCAL_STORAGE_SEARCH_HISTORY, JSON.stringify(historyToStore));
    };

    const restoreHistory = () => {
        const storedHistory = localStorage.getItem(LOCAL_STORAGE_SEARCH_HISTORY);

        if (storedHistory) {
            const history: Weather[] = JSON.parse(storedHistory);
            dispatch(addToHistory(history));
        }
    };

    const addList = (id: number) => {
        setList((prevId) => [...prevId, id]);
    };

    useEffect(() => {
        if (list.length) {
            list.forEach((id) => {
                historyRemove(id);
            });

            setList([]);
        }
    }, [list]);

    return { historyAdd, historyRemove: addList, restoreHistory };
};

export default useHistory;
