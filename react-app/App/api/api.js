var axios = require('axios');


module.exports = {
    fetchAllUsers: function () {
        var url = 'http://localhost:3000/users';
        return axios.get(url)
            .then( function (response) {
                  return response.data;
        })
        
    },
    fetchInfoUser: function (user_id) {
        var url = 'http://localhost:3000/users/' + user_id;
        return axios.get(url)
            .then( function (response) {
              return response.data;
        })
    },
    fetchMedicalHistory: function() {
        var url = 'http://localhost:3000/medical';
        return axios.get(url)
            .then( function (response){
                return response.data;
            })
    },
    fetchMedicalHistoryForUser: function (user_CNP) {
        var url = 'http://localhost:3000/medical/' + user_CNP;
        return axios.get(url)
            .then(function (response) {
                return response.data;
            })
    },
    postNewUser: function (user) {
        var url = 'http://localhost:3000/users/'
        return axios.post(url, user)
            .then( function (response) {
                return true;
            })
            .catch (function (error){
                console.log(error);
            })
    },
    deleteUser: function (user) {
        var url = 'http://localhost:3000/users/' + user._id;
        return axios.delete (url)
            .then( function (response){
                console.log('you have deleted a user')
            })
            .catch (function (error){
                console.log('consoled from api.js ' + error)
            })
    }
}