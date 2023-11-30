laticurrent = 0;
longicurrent = 0;

const latiCHI = 41.878113;
const longiCHI = -87.629799;

const latiLA = 34.052235;
const longiLA = -118.243683;

const latiDC = 38.907192;
const longiDC = -77.036873;

const latiNY = 40.712776;
const longiNY = -74.005974;

const latiBO= 42.35843;
const longiBO = -71.05977;

const latiOH= 39.12711;
const longiOH = -84.51439;

const latiTX= 32.78306;
const longiTX = -96.80667;


window.onload=function(){
	
	create = false;
	getcurrPosition();
	document.getElementById('submit').addEventListener('click', function(){
	 console.log('Clicked!');
				
	if (create == false) {
		makeBoxes();
		create = true;
	}
    
if(document.getElementById('current').checked){
	tod = `https://api.sunrisesunset.io/json?lat=${laticurrent}&lng=${longicurrent}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${laticurrent}&lng=${longicurrent}&date=tomorrow`;
}
else if(document.getElementById('NY').checked){
	tod = `https://api.sunrisesunset.io/json?lat=${latiNY}&lng=${longiNY}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${latiNY}&lng=${longiNY}&date=tomorrow`;
}

else if(document.getElementById('DC').checked){
	tod = `https://api.sunrisesunset.io/json?lat=${latiDC}&lng=${longiDC}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${latiDC}&lng=${longiDC}&date=tomorrow`;
}
else if(document.getElementById('LA').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latiLA}&lng=${longiLA}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${latiLA}&lng=${longiLA}&date=tomorrow`;
}
else if(document.getElementById('BO').checked){
	tod = `https://api.sunrisesunset.io/json?lat=${latiBO}&lng=${longiBO}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${latiBO}&lng=${longiBO}&date=tomorrow`;
}
else if(document.getElementById('CHI').checked){
	tod = `https://api.sunrisesunset.io/json?lat=${latiCHI}&lng=${longiCHI}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${latiCHI}&lng=${longiCHI}&date=tomorrow`;
}

else if(document.getElementById('OH').checked){
	tod = `https://api.sunrisesunset.io/json?lat=${latiOH}&lng=${longiOH}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${latiOH}&lng=${longiOH}&date=tomorrow`;
}

else if(document.getElementById('TX').checked){
	tod = `https://api.sunrisesunset.io/json?lat=${latiTX}&lng=${longiTX}&date=today`;
	tow = `https://api.sunrisesunset.io/json?lat=${latiTX}&lng=${longiTX}&date=tomorrow`;
}

fetch(tod)
  .then((response) => response.json())
  .then((datatoday) => {  
	txttodayup.value = ("███████████████████▓▒▒░░░ Today ░░░▒▒▓██████████████████████");
    risetxttoday.value = ("Sunrise: " + datatoday.results.sunrise);
    settxttoday.value = ("Sunset: " + datatoday.results.sunset);
    dawntxttoday.value = ("Dawn: " + datatoday.results.dawn);
	dusktxttoday.value = ("Dusk: " + datatoday.results.dusk);
	lengthtxttoday.value = ("Day Length: " + datatoday.results.day_length);
	goldentxttoday.value = ("Golden Hour: " + datatoday.results.golden_hour);
	zonetxttoday.value = ("Zone: " + datatoday.results.timezone);
	txttodaydown.value = ("██████████████████▓▒▒░░░ Tomorrow ░░░▒▒▓██████████████████");
	
  })
  .catch((error) => console.error("Error:", error));

fetch(tow)
  .then((response) => response.json())
  .then((datatommarow) => {
    risetxttommarow.value = ("Sunrise: " + datatommarow.results.sunrise);
    settxttommarow.value = ("Sunset: " + datatommarow.results.sunset);
    dawntxttommarow.value = ("Dawn: " + datatommarow.results.dawn);
	dusktxttommarow.value = ("Dusk: " + datatommarow.results.dusk);
	lengthtxttommarow.value = ("Day Length: " + datatommarow.results.day_length);
	goldentxttommarow.value = ("Golden Hour: " + datatommarow.results.golden_hour);
	zonetxttommarow.value = ("Zone: " + datatommarow.results.timezone);
  })
  .catch((error) => console.error("Error:", error));
	})

}

function successful(position) {
	let prv = position.coords;
	lati = prv.latitude;
	loni = prv.longitude;
	console.log('Your current position is:');
	tod = `https://api.sunrisesunset.io/json?lat=${laticurrent}&lng=${longicurrent}`;
	tow = `https://api.sunrisesunset.io/json?lat=${laticurrent}&lng=${longicurrent}&date=tomorrow`;
}

function getcurrPosition(){
	navigator.geolocation.getCurrentPosition(successful, error);
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

function makeBoxes() {
	txttodayup = document.createElement("input");
	risetxttoday = document.createElement("input");
	settxttoday  = document.createElement("input");
	dawntxttoday  = document.createElement("input");
	dusktxttoday  = document.createElement("input");
	lengthtxttoday  = document.createElement("input");
	goldentxttoday = document.createElement("input");
	zonetxttoday  = document.createElement("input");
	txttodaydown = document.createElement("input");
	///////////////////////////////////////////////////
	risetxttommarow = document.createElement("input");
	settxttommarow = document.createElement("input");
	dawntxttommarow = document.createElement("input");
	dusktxttommarow = document.createElement("input");
	lengthtxttommarow = document.createElement("input");
	goldentxttommarow = document.createElement("input");
	zonetxttommarow = document.createElement("input");
	//////////////////////////////////////////////////
	txttodayup.type = "text";
	txttodayup.disabled = true;
	txttodayup.setAttribute("id", "zone");
	document.body.appendChild(txttodayup);
	//////////////////////////////////////////////////
	risetxttoday.type = "text";
	risetxttoday.disabled = true;
	risetxttoday.setAttribute("id", "rise");
	document.body.appendChild(risetxttoday);
	 //////////////////////////////////////////////////
	settxttoday.type = "text";
	settxttoday.disabled = true;
	settxttoday.setAttribute("id", "set");
	document.body.appendChild(settxttoday);
	//////////////////////////////////////////////////
	dawntxttoday.type = "text";
	dawntxttoday.disabled = true;
	dawntxttoday.setAttribute("id", "dawn");
	document.body.appendChild(dawntxttoday);
	/////////////////////////////////////////////////
	dusktxttoday.type = "text";
	dusktxttoday.disabled = true;
	dusktxttoday.setAttribute("id", "dusk");
	document.body.appendChild(dusktxttoday);
	//////////////////////////////////////////////////
	lengthtxttoday.type = "text";
	lengthtxttoday.disabled = true;
	lengthtxttoday.setAttribute("id", "length");
	document.body.appendChild(lengthtxttoday);
	//////////////////////////////////////////////////
	goldentxttoday.type = "text";
	goldentxttoday.disabled = true;
	goldentxttoday.setAttribute("id", "length");
	document.body.appendChild(goldentxttoday);
	//////////////////////////////////////////////////
	zonetxttoday.type = "text";
	zonetxttoday.disabled = true;
	zonetxttoday.setAttribute("id", "zone");
	document.body.appendChild(zonetxttoday);
	//////////////////////////////////////////////////
	txttodaydown.type = "text";
	txttodaydown.disabled = true;
	txttodaydown.setAttribute("id", "zone");
	document.body.appendChild(txttodaydown);
	//////////////////////////////////////////////////
	risetxttommarow.type = "text";
	risetxttommarow.disabled = true;
	risetxttommarow.setAttribute("id", "rise");
	document.body.appendChild(risetxttommarow);
	 //////////////////////////////////////////////////
	settxttommarow.type = "text";
	settxttommarow.disabled = true;
	settxttommarow.setAttribute("id", "set");
	document.body.appendChild(settxttommarow);
	//////////////////////////////////////////////////
	dawntxttommarow.type = "text";
	dawntxttommarow.disabled = true;
	dawntxttommarow.setAttribute("id", "dawn");
	document.body.appendChild(dawntxttommarow);
	//////////////////////////////////////////////////
	dusktxttommarow.type = "text";
	dusktxttommarow.disabled = true;
	dusktxttommarow.setAttribute("id", "dusk");
	document.body.appendChild(dusktxttommarow);
	//////////////////////////////////////////////////
	lengthtxttommarow.type = "text";
	lengthtxttommarow.disabled = true;
	lengthtxttommarow.setAttribute("id", "length");
	document.body.appendChild(lengthtxttommarow);
	//////////////////////////////////////////////////
	goldentxttommarow.type = "text";
	goldentxttommarow.disabled = true;
	goldentxttommarow.setAttribute("id", "length");
	document.body.appendChild(goldentxttommarow);
	//////////////////////////////////////////////////
	zonetxttommarow.type = "text";
	zonetxttommarow.disabled = true;
	zonetxttommarow.setAttribute("id", "zone");
	document.body.appendChild(zonetxttommarow);
}	
