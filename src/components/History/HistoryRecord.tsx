import { FC, useRef, useState } from "react";
import classNames from "classnames";
import { FaTrash, FaTimes } from "react-icons/fa";

import useSettings from "../../hooks/useSettings";

const HistoryRecord: FC<{ record: string }> = ({ record }) => {
    const [removing, setRemoving] = useState<boolean>(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { changeSearchCity, removeHistoryRecord } = useSettings();

    const handleRecordSelect = () => {
        changeSearchCity(record);
    };

    const handleRecordRemove = () => {
        if (timer.current) {
            clearTimeout(timer.current);
            setRemoving(false);
            timer.current = null;
        } else {
            timer.current = setTimeout(() => {
                removeHistoryRecord(record);
            }, 2000);
            setRemoving(true);
        }
    };

    return (
        <div className={classNames("search-history__item", { removing: removing })}>
            <span className={"search-history__item-title"} onClick={handleRecordSelect}>
                {record}
            </span>
            {" "}
            <button className={"search-history__item-btn"} onClick={handleRecordRemove}>
                {removing ? <FaTimes /> : <FaTrash />}
            </button>
        </div>
    );
};

export default HistoryRecord;
