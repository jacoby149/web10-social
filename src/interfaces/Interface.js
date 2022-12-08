import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import {mockContacts} from './Mocks'
function useInterface() {
    const I = {};
    [I.contacts, I.setContacts] = React.useState(mockContacts);
    [I.theme, I.setTheme] = React.useState("dark");
    [I.menuCollapsed,I.setMenuCollapsed] = React.useState(true);

    I.toggleMenuCollapsed = function () {
        I.setMenuCollapsed(!I.menuCollapsed)
    }

    I.toggleTheme = function () {
        I.theme=="dark"?I.setTheme("light"):I.setTheme("dark")
    }

    return I;
}

export { useInterface };