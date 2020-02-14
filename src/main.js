import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';

function showInfo(response) {
  $("#waiting").hide();
  $("#output").fadeIn();
  $("#results").text(response);
  console.log(typeof(response));
}

function showError() {
  $("#waiting").hide();
  $("#output").fadeIn();
  $("#results").text("Something went wrong! We're sorry. Please try again.");
}

$(document).ready(function() {
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
      if (response.length == 0) {
        $("#results").text("Your query returned no results, please try again");
        $("#output").fadeIn();
      } else if (response == false) {
        showError();
      } else {
        showInfo(response);
      }
    })();
  });
});