/*
 * Author: Anna Yu
 * Created: 28 February 2021
 * License: Public Domain
*/

$("#alamedabtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#alameda").offset().top}, 'slow');
});

$("#contraCostabtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#contracosta").offset().top}, 'slow');
});

$("#montereybtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#monterey").offset().top}, 'slow');
});

$("#sanBenitobtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#sanbenito").offset().top}, 'slow');
});

$("#sanFranciscobtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#sanfrancisco").offset().top}, 'slow');
});

$("#sanMateobtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#sanmateo").offset().top}, 'slow');
});

$("#santaClarabtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#santaclara").offset().top}, 'slow');
});

$("#santaCruzbtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#santacruz").offset().top}, 'slow');
});

// from https://github.com/ehsalazar/art101/blob/master/groupproject/js/lab.js

//button group
$("#alameda_button").click(function(){$("#alameda").toggleClass("hidden")})
$("#contracosta_button").click(function(){$("#contracosta").toggleClass("hidden")})
$("#monterey_button").click(function(){$("#monterey").toggleClass("hidden")})
$("#sanbenito_button").click(function(){$("#sanbenito").toggleClass("hidden")})
$("#sanfrancisco_button").click(function(){$("#sanfrancisco").toggleClass("hidden")})
$("#sanmateo_button").click(function(){$("#sanmateo").toggleClass("hidden")})
$("#santaclara_button").click(function(){$("#santaclara").toggleClass("hidden")})
$("#santacruz_button").click(function(){$("#santacruz").toggleClass("hidden")})

// Alameda info buttons
$("#testing_button_alameda").click(function(){$("#testing_alameda").toggleClass("unhideTest")});
$("#vaccination_button_alameda").click(function(){$("#vaccination_alameda").toggleClass("unhideVaccine")});
$("#additional_button_alameda").click(function(){$("#additional_alameda").toggleClass("unhideAdditional")});

// Contra Costa info buttons
$("#testing_button_contracosta").click(function(){$("#testing_contracosta").toggleClass("unhideTest")});
$("#vaccination_button_contracosta").click(function(){$("#vaccination_contracosta").toggleClass("unhideVaccine")});
$("#additional_button_contracosta").click(function(){$("#additional_contracosta").toggleClass("unhideAdditional")});

// Monterey info buttons
$("#testing_button_monterey").click(function(){$("#testing_monterey").toggleClass("unhideTest")});
$("#vaccination_button_monterey").click(function(){$("#vaccination_monterey").toggleClass("unhideVaccine")});
$("#additional_button_monterey").click(function(){$("#additional_monterey").toggleClass("unhideAdditional")});

// San Benito info buttons
$("#testing_button_sanbenito").click(function(){$("#testing_sanbenito").toggleClass("unhideTest")});
$("#vaccination_button_sanbenito").click(function(){$("#vaccination_sanbenito").toggleClass("unhideVaccine")});
$("#additional_button_sanbenito").click(function(){$("#additional_sanbenito").toggleClass("unhideAdditional")});

// San Francisco info buttons
$("#testing_button_sanfrancisco").click(function(){$("#testing_sanfrancisco").toggleClass("unhideTest")});
$("#vaccination_button_sanfrancisco").click(function(){$("#vaccination_sanfrancisco").toggleClass("unhideVaccine")});
$("#additional_button_sanfrancisco").click(function(){$("#additional_sanfrancisco").toggleClass("unhideAdditional")});

// San Mateo info buttons
$("#testing_button_sanmateo").click(function(){$("#testing_sanmateo").toggleClass("unhideTest")});
$("#vaccination_button_sanmateo").click(function(){$("#vaccination_sanmateo").toggleClass("unhideVaccine")});
$("#additional_button_sanmateo").click(function(){$("#additional_sanmateo").toggleClass("unhideAdditional")});

// Santa Clara info buttons
$("#testing_button_santaclara").click(function(){$("#testing_santaclara").toggleClass("unhideTest")});
$("#vaccination_button_santaclara").click(function(){$("#vaccination_santaclara").toggleClass("unhideVaccine")});
$("#additional_button_santaclara").click(function(){$("#additional_santaclara").toggleClass("unhideAdditional")});

// Santa Cruz info buttons
$("#testing_button_santacruz").click(function(){$("#testing_santacruz").toggleClass("unhideTest")});
$("#vaccination_button_santacruz").click(function(){$("#vaccination_santacruz").toggleClass("unhideVaccine")});
$("#additional_button_santacruz").click(function(){$("#additional_santacruz").toggleClass("unhideAdditional")});
