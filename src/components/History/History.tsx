import HistoryRecord from "./HistoryRecord";
import useSettings from "../../hooks/useSettings";

const History = () => {
    const { history } = useSettings();

    return (
        <div className={"search-history"}>
            <div className={"container"}>
                <div className={"search-history__wrapper"}>
                    <div className={"search-history__list-scroll custom-scroll"}>
                        <div className={"search-history__list"}>
                            {history.map((record) => (
                                <HistoryRecord key={record} record={record} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
