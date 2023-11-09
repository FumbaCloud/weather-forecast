import { useState } from "react";
import classNames from "classnames";

import { City } from "../../services/city/types";
import useFindCity from "../../hooks/useFindCity";
import useDebounce from "../../hooks/useDebounce";
import useCurrentCity from "../../hooks/useCurrentCity";

const HeaderSearch = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedSearchValue = useDebounce(searchValue);
    const { data } = useFindCity(debouncedSearchValue);
    const [showTips, setShowTips] = useState(false);

    const { addCurrentCity } = useCurrentCity();

    const handleTipChoose = async (city: City) => {
        addCurrentCity(city);
        setShowTips(false);
        setSearchValue("");
    };

    return (
        <div className={"header__search"}>
            <div className={"header__search-wrapper"}>
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Weather in your city"
                    onBlur={() => setShowTips(false)}
                    onFocus={() => setShowTips(true)}
                    className={"header__search-input"}
                    onChange={({ target }) => setSearchValue(target.value)}
                />
            </div>
            {data && showTips && (
                <ul className={"header__search-list"}>
                    <div className={classNames("header__search-scroll", { "custom-scroll": data.length > 3 })}>
                        {data.length > 0 ? (
                            <>
                                {data.map((tip) => (
                                    <li
                                        key={tip.lon + tip.lat}
                                        className="header__search-item"
                                        onMouseDown={() => handleTipChoose(tip)}
                                    >
                                        {tip.name}
                                    </li>
                                ))}
                            </>
                        ) : (
                            <li className={"header__search-item search-tip--empty"}>
                                Not found. To make search more precise put the city name, comma, 2-letter country code
                                (ISO3166).
                            </li>
                        )}
                    </div>
                </ul>
            )}
        </div>
    );
};

export default HeaderSearch;
