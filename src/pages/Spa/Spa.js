import React from 'react';
import Footer from '../Shared/Footer';
import ClientSay from './ClientSay';
import SpaBanner from './SpaBanner';
import SpaEtiquette from './SpaEtiquette';
import ServicesTheme from '../Home/ServicesTheme'
import WellNess from './WellNess';

const Spa = () => {
    return (
        <div>
            <SpaBanner />
            <WellNess />
            <ServicesTheme />
            <ClientSay />
            <SpaEtiquette />
            <Footer />
        </div>
    );
};

export default Spa;