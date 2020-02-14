import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';

//displays list of doctors based on results from API call
function showInfo(response) {
  $("#waiting").hide();
  for (let i=0; i<response.data.length; i++) {
    $("#results").append(`<li value="` + response.data[i].profile.last_name + `">` + response.data[i].profile.last_name + `</li>`);

  }
  $("#output").fadeIn();
  console.log(response.data);
}

//displays error message if API call fails
function showError() {
  $("#waiting").hide();
  $("#output").fadeIn();
  $("#results").text("Something went wrong! We're sorry. Please try again.");
}

$(document).ready(function() {
  //click function to submit search form
  $("form").submit(function() {
    event.preventDefault();
    let name = $("input#name").val();
    let condition = $("input#condition").val();
    (async () => {
      let newQuery = new DoctorService();
      let response;
      if (name) {
        $("#inputform").hide();
        $("#waiting").fadeIn();
        response = await newQuery.getDoctorByName(name);
      } else if (condition) {
        $("#inputform").hide();
        $("#waiting").fadeIn();
        response = await newQuery.getDoctorByCondition(condition);
      } else {
        $("#emptyinput").fadeIn();
        setTimeout(function() {
          $("#emptyinput").fadeOut();
        }, 1500);
      }
      //checks for a successful api call with no results
      if (response.data.length == 0) {
        $("#waiting").hide();
        $("#results").text("Your query returned no results, please try again");
        $("#output").fadeIn();
      } else if (response == false) {
        showError();
      } else {
        showInfo(response);
      }
    })();
  });
  //click function for output list of doctor names to see full info
  $("ul#results").on("click", "li", function() {
    let currentDoc = $(this).attr("value");
    console.log(currentDoc);
  });
});