require('./bootstrap');


import React, { Component } from 'react';
import Main from './components/Main';
import { render } from 'react-dom';

if (document.getElementById('react')) {
    render(<Main />, document.getElementById('react'));
}
