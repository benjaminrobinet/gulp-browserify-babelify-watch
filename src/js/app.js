import $ from 'jquery';
import {changeColor} from "./test";

changeColor('div');

$('body').css('background-color', 'black');

console.log(this);