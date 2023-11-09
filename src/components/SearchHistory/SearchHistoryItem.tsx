import { FC, useRef, useState } from "react";
import classNames from "classnames";
import { FaTrash, FaTimes } from "react-icons/fa";

import useHistory from "../../hooks/useHistory";
import { Weather } from "../../services/weather/types";
import useCurrentCity from "../../hooks/useCurrentCity";

const SearchHistoryItem: FC<{ item: Weather }> = ({ item }) => {
    const { historyRemove } = useHistory();
    const [deleting, setDeleting] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { addCurrentCity } = useCurrentCity();

    const handleHistorySelect = () => {
        addCurrentCity({
            lat: item.coord.lat,
            lon: item.coord.lon,
        });
    };

    const handleHistoryRemove = (id: number) => {
        if (timer.current) {
            clearTimeout(timer.current);
            setDeleting(false);
            timer.current = null;
        } else {
            timer.current = setTimeout(() => {
                historyRemove(id);
            }, 3000);
            setDeleting(true);
        }
    };

    return (
        <div
            className={classNames("search-history__item", {
                deleting: deleting,
            })}
        >
            <span className={"search-history__item-title"} onClick={handleHistorySelect}>
                {item.name}
            </span>{" "}
            <button className={"search-history__item-btn"} onClick={() => handleHistoryRemove(item.id)}>
                <>{deleting ? <FaTimes /> : <FaTrash />}</>
            </button>
        </div>
    );
};

export default SearchHistoryItem;
