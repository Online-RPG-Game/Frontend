import axios from 'axios';

const rooms = 'https://ls-rpg.herokuapp.com/api/adv/get_rooms'

axios.get(rooms)
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error)
})