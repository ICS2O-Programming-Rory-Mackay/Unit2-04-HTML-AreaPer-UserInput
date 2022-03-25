// Copyright (c) 2022 Rory Mackay All rights reserved
//
// Created by:Rory Mackay
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const length = parseFloat(document.getElementById('length-of-rectangle').value)
  const width = parseFloat(document.getElementById('width-of-rectangle').value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}