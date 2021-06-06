import axios from "axios";

// exporting randomly generated employee info.
// image, name, phone, email, dob

export default {
    getRandomEmployee: function() {
         let user = axios.get("https://randomuser.me/api/?results=3");
         console.log(user)
         return user
    },
};

 