global.jQuery = global.$ = require('jquery/dist/jquery.min.js');

global._ = require('underscore/underscore-min.js');
global.React = global.__React = require('react/dist/react.min.js');
const data1 = require('flux/dist/Flux.min.js');
global.Dispatcher = data1.Dispatcher;
const data2 = require('events/events.js');
global.EventEmitter = data2.EventEmitter;

require('zone.js/dist/zone.min.js');