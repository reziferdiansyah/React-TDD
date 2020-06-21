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
import Counter from '../components/Counter/counter';

import './config';

describe('Counter tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper =  mount(<Counter />);
    });

    test('Le titre Compteur doit être présent', () => {
        const mainTitle = wrapper.find('h1').text();
        expect(mainTitle).toBe('Compteur');
    });

    test('Le composant Compteur doit contenir un bouton incrémenter', () => {
        const buttonIncrement = wrapper.find('#increment-counter.button');
        expect(buttonIncrement.exists()).toBeTruthy();
    });

    test('Le composant Compteur doit avoir le bouton incrémenter qui a pour titre Incrémenter', () => {
        const buttonIncrement = wrapper.find('#increment-counter.button');
        expect(buttonIncrement.text()).toBe('Incrémenter');
    });

    test('Le composant Compteur doit contenir un bouton décrémenter', () => {
        const buttonDecrement = wrapper.find('#decrement-counter.button');
        expect(buttonDecrement.exists()).toBeTruthy();
    });

    test('Le composant Compteur doit avoir le bouton décrémenter qui a pour titre Décrémenter', () => {
        const buttonDecrement = wrapper.find('#decrement-counter.button');
        expect(buttonDecrement.text()).toBe('Décrémenter');
    });

    test('Le composant Compteur doit avoir un espace résultat qui a pour but d\'afficher le compteur', () => {
        const displayCounter = wrapper.find('#display-counter');
        expect(displayCounter.exists()).toBeTruthy();
    });

    test('Le composant Compteur doit afficher la valeur 0 quand ce dernier est initialisé', () => {
        const displayCounter = wrapper.find('#display-counter');
        expect(displayCounter.text()).toBe("0");
    });

    test('Le composant Compteur doit afficher la valeur 1 quand j\'appuie une fois sur le bouton incrémenter', () => {
        const displayCounter = wrapper.find('#display-counter');
        const buttonIncrement = wrapper.find('#increment-counter');
        buttonIncrement.simulate('click');
        expect(displayCounter.text()).toBe("1");
    });

    test('Le composant Compteur doit afficher la valeur 10 quand j\'appuie dix fois sur le bouton incrémenter', () => {
        const displayCounter = wrapper.find('#display-counter');
        const buttonIncrement = wrapper.find('#increment-counter');
        for(let i = 0; i < 10; ++i){
            buttonIncrement.simulate('click');
        }
        expect(displayCounter.text()).toBe("10");
    });

    test('Le composant Compteur doit afficher la valeur -1 quand j\'appuie une fois sur le bouton décrémenter', () => {
        const displayCounter = wrapper.find('#display-counter');
        const buttonDecrement = wrapper.find('#decrement-counter.button');
        buttonDecrement.simulate('click');
        expect(displayCounter.text()).toBe("-1");
    });

    test('Le composant Compteur doit afficher la valeur -10 quand j\'appuie dix fois sur le bouton décrémenter', () => {
        const displayCounter = wrapper.find('#display-counter');
        const buttonDecrement = wrapper.find('#decrement-counter.button');
        for(let i = 0; i < 10; ++i){
            buttonDecrement.simulate('click');
        }
        expect(displayCounter.text()).toBe("-10");
    });
});