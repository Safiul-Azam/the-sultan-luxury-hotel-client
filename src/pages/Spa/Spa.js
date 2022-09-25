import React from 'react';
import Footer from '../Shared/Footer';
import ClientSay from './ClientSay';
import SpaBanner from './SpaBanner';
import SpaEtiquette from './SpaEtiquette';
import SpaTheme from './SpaTheme';
import WellNess from './WellNess';

const Spa = () => {
    return (
        <div>
            <SpaBanner />
            <WellNess />
            <SpaTheme />
            <ClientSay />
            <SpaEtiquette />
            <Footer />
        </div>
    );
};

export default Spa;