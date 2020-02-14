export class DoctorService {
  async getDoctorByName(name) {
    try {
      let response = await fetch('api url');
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }

  async getDoctorByIssue(name) {
    try {
      let response = await fetch('api url');
      let jsonifiedResponse;
      if (response.status == 200 && response.ok) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }

}