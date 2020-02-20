import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor-service';

//displays list of doctors based on results from API call
function showList(response) {
  for (let i=0; i<response.data.length; i++) {
    $("#results").append(`<li value="` + response.data[i].npi + `">` + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + `</li>`);
  }
  $("#waiting").hide();
  $("#output").fadeIn();
}

//displays error message if API call fails
function showError() {
  $("#results").text("Something went wrong with your search! We're sorry. Please try again.");
  $("#waiting").hide();
  $("#output").fadeIn();
}

//displays additional info for each doctor
function showDetail(response) {
  let index;
  for (let i=0; i<response.data.practices.length; i++) {
    if (response.data.practices[i].location_slug == "or-portland") {
      index = i;
      break
    }
  }
  $("#fullname").text(response.data.profile.first_name + " " + response.data.profile.last_name);
  $("#address").text(response.data.practices[index].visit_address.street)
  $("#citystate").text(response.data.practices[index].visit_address.city + ", " + response.data.practices[index].visit_address.state);
  $("#phone").text(response.data.practices[index].phones[0].number);
  if (response.data.practices[index].accepts_new_patients == true) {
    $("#accepting").text("Accepting new patients");
  } else {
    $("#accepting").text("Not accepting new patients at this time");    
  }
  if (response.data.practices[index].website == true) {
    $("#website").text(response.data.practices[index].website);
  } else {
    $("#website").text("None found");
  }
  $("#bio").text(response.data.profile.bio);
  $("#details").fadeIn();
}

$(document).ready(function() {
  const newQuery = new DoctorService();
  //click to show list of all conditions
  $("#conditionsbtn").click(function() {
    (async () => {
      let response = await newQuery.getConditions();
      if (response == false) {
        showError();
      } else if (response.data.length == 0) {
        $("#results").text("Your query returned no results, please try again");
        $("#output").fadeIn();
      } else {
        $("#conditionsearch").hide();
        for (let i=0; i<response.data.length; i++) {
          $("#conditionslist").append(response.data[i].name + ", ");
        }
      }
    })();
  });
  //click function to submit search form
  $("form").submit(function() {
    event.preventDefault();
    let name = $("input#name").val();
    let condition = $("input#condition").val();
    (async () => {
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
      if (response == false) {
        showError();
      } else if (response.data.length == 0) {
        $("#waiting").hide();
        $("#results").text("Your query returned no results, please try again");
        $("#output").fadeIn();
      } else {
        showList(response);
      }
    })();
  });
  //click function for output list of doctor names to see details
  $("ul#results").on("click", "li", function() {
    let currentId = $(this).attr("value");
    (async () => {
      let response;
      if (currentId) {
        response = await newQuery.getDoctorById(currentId);
      }
      if (response == false) {
        showError();
      } else if (response.data.length == 0) {
        $("#details").text("Your query returned no results, please try again");
        $("#details").fadeIn();
      } else {
        showDetail(response);
        console.log(response.data.practices);
      }
    })();
  });
});