/*
 * Copyright 2020 Yassine AZIMANI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { mount } from 'enzyme';
import React from 'react';
import Header from '../components/Header/header';

import './config';
import { BrowserRouter } from 'react-router-dom';

describe('Header tests', () => {

    let header;

    beforeEach(() => {
        header = mount(<BrowserRouter><Header /></BrowserRouter>);
    });

    test('Le menu doit être présent', () => {
        const menu = header.find('ul.menu');
        expect(menu.exists()).toBeTruthy();
    });

    test('Le menu doit contenir un lien vers le Compteur dont le titre est Compteur', () => {
        const linkCounter = header.find('ul.menu #submenu-counter');
        expect(linkCounter.text()).toBe('Compteur');
    });

    test('Le menu doit contenir un lien vers le Compteur dont l\'url est /counter', () => {
        const linkCounter = header.find('ul.menu #submenu-counter a');
        expect(linkCounter.props().href).toBe('/counter');
    });

});