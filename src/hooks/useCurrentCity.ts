import { settingsSlice } from "../stores/reducers/settings";
import { SelectedCity } from "../helpers/types/selectedCity";
import { useTypedDispatch, useTypedSelector } from "../stores/store";

export const LOCAL_STORAGE_CURRENT_CITY = "current-city";

const useCurrentCity = () => {
    const { currentCity } = useTypedSelector((state) => state.appReducer);
    const { setCurrentCity } = settingsSlice.actions;
    const dispatch = useTypedDispatch();

    const addCurrentCity = (city: SelectedCity) => {
        dispatch(setCurrentCity(city));
        localStorage.setItem(LOCAL_STORAGE_CURRENT_CITY, JSON.stringify(city));
    };

    const restoreCurrentCity = () => {
        const storedCurrentCity = localStorage.getItem(LOCAL_STORAGE_CURRENT_CITY);

        if (storedCurrentCity) {
            const currentCity: SelectedCity = JSON.parse(storedCurrentCity);
            dispatch(setCurrentCity(currentCity));
        }
    };

    return { currentCity, addCurrentCity, restoreCurrentCity };
};

export default useCurrentCity;
