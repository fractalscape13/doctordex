import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let name = $("input#name").val();
    let condition = $("input#condition").val();
    (async () => {
      let newQuery = new DoctorService();
      let response;
      if (name) {
        response = await newQuery.getDoctorByName(name);
      } else if (condition) {
        response = await newQuery.getDoctorByCondition(condition);
      } else {
        $("#emptyinput").fadeIn();
        setTimeout(function() {
          $("#emptyinput").fadeOut();
        }, 3000);
      }
      if (response.length == 0) {
        $("#output").text("Your query returned no results, please try again");
      }
    })();
  });
});