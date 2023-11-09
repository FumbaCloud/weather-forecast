import { useEffect, useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Weather from "./Weather/Weather";
import useHistory from "../hooks/useHistory";
import useCurrentCity from "../hooks/useCurrentCity";
import SearchHistory from "./SearchHistory/SearchHistory";

const AppView = () => {
    const [restored, setRestored] = useState(false);

    const { restoreHistory } = useHistory();
    const { restoreCurrentCity } = useCurrentCity();

    useEffect(() => {
        restoreHistory();
        restoreCurrentCity();

        setRestored(true);
    }, []);

    if (!restored) {
        return null;
    }

    return (
        <>
            <Header />
            <SearchHistory />
            <Weather />
            <Footer />
        </>
    );
};

export default AppView;
