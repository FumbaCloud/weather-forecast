import { settingsSlice } from "../stores/reducers/settings";
import { useTypedDispatch, useTypedSelector } from "../stores/store";

const useSettings = () => {
    const { searchCity, recentCity, history } = useTypedSelector((state) => state.settingsReducer);
    const { setCurrentCity, setRecentCity, addToHistory, removeFromHistory } = settingsSlice.actions;

    const dispatch = useTypedDispatch();

    const changeSearchCity = (city: string) => {
        dispatch(setCurrentCity(city));
    };

    const changeRecentCity = (city: string) => {
        dispatch(setRecentCity(city));
    };

    const addHistoryRecord = (record: string) => {
        dispatch(addToHistory(record));
    };

    const removeHistoryRecord = (record: string) => {
        dispatch(removeFromHistory(record));
    };

    return { searchCity, changeSearchCity, recentCity, changeRecentCity, history, addHistoryRecord, removeHistoryRecord };
};

export default useSettings;
