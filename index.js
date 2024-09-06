document.getElementById('booking-form').addEventListener('submit', function(event){
event.preventDefault();

const destination = document.getElementById('destination').value;
const date = document.getElementById('date').value;
const passengers = document.getElementById('passengers').value;

if(destination && date && passengers){alert("Flight to " + destination + " booked successfully for " + passengers + " passenger(s) on " + date + ".");
}else{alert("Please fill out all fields.")
}
});
