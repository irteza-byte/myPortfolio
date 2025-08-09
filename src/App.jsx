import "mouse-follower/dist/mouse-follower.min.css";

import { Header } from "./components/Header.jsx";
import { Hero_section } from "./components/Hero_section.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { ContactForm } from "./ContactForm.jsx";


import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import ProfileCard from "./components/ProfileCard.jsx";
import {HeaderMobile} from "./components/HeaderMobile.jsx";

function App() {

    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
    });

// Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
        console.log(e);
    });

    return (
        <div>
            <HeaderMobile/>
            <Header />

            <Hero_section />
            <ProfileCard/>
            <Skills />
            <Projects />
            <ContactForm />
        </div>
    );
}

export default App;
