import { useTypedSelector } from "../../stores/store";
import SearchHistoryItem from "./SearchHistoryItem";

const SearchHistory = () => {
    const { history } = useTypedSelector((state) => state.appReducer);

    return (
        <div className={"search-history"}>
            <div className={"container"}>
                <div className={"search-history__wrapper"}>
                    <div className={"search-history__list-scroll custom-scroll"}>
                        <div className={"search-history__list"}>
                            {history.map((item) => (
                                <SearchHistoryItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchHistory;
