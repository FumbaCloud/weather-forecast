import { useState } from "react";

import useSettings from "../../hooks/useSettings";

const HeaderSearch = () => {
    const [city, setCity] = useState<string>("");

    const { changeSearchCity, addHistoryRecord } = useSettings();

    const handleSearch = () => {
        changeSearchCity(city);
        addHistoryRecord(city);
    };

    return (
        <div className={"header__search"}>
            <div className={"header__search-wrapper"}>
                <input
                    type="text"
                    value={city}
                    placeholder="Weather in your city"
                    className={"header__search-input"}
                    onChange={({ target }) => setCity(target.value)}
                />
                <button className={"header__search-btn"} onClick={handleSearch} disabled={!city.trim()}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default HeaderSearch;
