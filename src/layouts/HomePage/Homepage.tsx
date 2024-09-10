import { Navbar } from "../NavbarAndFooter/Navbar";
import { Carousel } from "./Components/Carousel";
import { ExploreTopBooks } from "./Components/ExploreTopBooks";
import { Footer } from "./Components/Footer";
import { Heros } from "./Components/Heros";
import { LibraryServices } from "./Components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
            <Footer />
        </>
    );
}