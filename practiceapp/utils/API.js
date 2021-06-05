import axios from "axios";

// exporting randomly generated employee info.
// image, name, phone, email, dob

export default {
    getRandomEmployee: function() {
        return axios.get("https://randomuser.me/api/?inc=picture,name,phone,email,dob")
    }
};