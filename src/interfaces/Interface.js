import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import mockContacts from '../mocks/MockContacts'
function useInterface() {
    const I = {};
    [I.contacts, I.setContacts] = React.useState(mockContacts);
    [I.theme, I.setTheme] = React.useState("dark");
    [I.menuCollapsed,I.setMenuCollapsed] = React.useState(true);
    [I.mode,I._setMode] = React.useState("login");
    [I.currentContact,I.setCurrentContact] = React.useState("");
    [I.search,I.setSearch] = React.useState("");

    I.setMode = function(mode){
        I.setMenuCollapsed(true);
        I.setSearch("")
        I._setMode(mode);
    }

    I.toggleMenuCollapsed = function () {
        I.setMenuCollapsed(!I.menuCollapsed)
    }

    I.toggleTheme = function () {
        I.theme=="dark"?I.setTheme("light"):I.setTheme("dark")
    }

    return I;
}

export { useInterface };