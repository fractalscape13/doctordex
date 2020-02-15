export class DoctorService {
  async getDoctorByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  async getDoctorByCondition(condition) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  async getDoctorById(id) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors/npi/${id}?user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  async getConditions() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}