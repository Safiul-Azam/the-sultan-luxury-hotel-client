import React from 'react';
import ClientSay from './ClientSay';
import SpaBanner from './SpaBanner';
import SpaEtiquette from './SpaEtiquette';
import SpaTheme from './SpaTheme';
import WellNess from './WellNess';

const Spa = () => {
    return (
        <div>
            <SpaBanner></SpaBanner>
            <WellNess></WellNess>
            <SpaTheme></SpaTheme>
            <ClientSay></ClientSay>
            <SpaEtiquette></SpaEtiquette>
        </div>
    );
};

export default Spa;