
// source used to figure out the fucntion for how to create the week tabs
// https://www.w3schools.com/howto/howto_js_tabs.asp
function openDay(dayName){
  var i;

  var x = document.getElementsByClassName("day");

  for (i=0; i < x.length; i++){
    x[i].style.display = "none";

  }

    document.getElementById(dayName).style.display = 'block';

}
  // resources used for this was quote machine from class &
  // https://stackoverflow.com/questions/39239632/html-css-how-to-set-text-e-g-quote-of-the-day-to-change-automatically-on
    var quotes = ['“Your work is to discover your world and then with all your heart give yourself to it.”— Buddha','“I am my own experiment. I am my own work of art.” – Madonna', '“The most powerful relationship you will ever have is the relationship with yourself. ” – Steve Maraboli', '“Self care is not a waste of time. Self care makes your use of time more sustainable.” – Jackie Viramontez', '“You aren’t doing “nothing” when you choose to put your wellbeing first. In fact, this is the key to having everything.” ― Brittany Burgunder', '“You owe yourself the love that you so freely give others.” – Unknown']
    function randomQuotes() {
        var idx = Math.floor(Math.random() * quotes.length)
        document.getElementById('quote').innerHTML = quotes[idx]
    }
