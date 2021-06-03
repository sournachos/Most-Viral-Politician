import axios from "axios";

export default {
  // Gets all books
  getPols: function() {
    return axios.get("/api/");
  },
  // Gets the book with the given id
  getPolById: function(id) {
    return axios.get("/api/polprofile/" + id);
  }
};
