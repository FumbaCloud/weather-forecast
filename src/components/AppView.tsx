import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Weather from "./Weather/Weather";
import History from "./History/History";

const AppView = () => {
    return (
        <>
            <Header />
            <History />
            <Weather />
            <Footer />
        </>
    );
};

export default AppView;
