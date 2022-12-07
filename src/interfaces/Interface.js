import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'

function useInterface() {
    const I = {};
    [I.contacts, I.setContacts] = React.useState([]);
    
    I.logOut = function () {
        return
    }

    return I;
}

export { useInterface };