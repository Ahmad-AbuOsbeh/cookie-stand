'use strict';

let workingHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//Seattle////////////////////////////////////////////////////////////////////////////////

let Seattle={

  name: 'Seattle',
  minNumOfCust:23,
  maxNumOfCust:65,
  avgCookieperSale:6.3,
  gitCustNumPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  totalCustPerHour:[],
  totalCookiesPerHour:[],
  totalCookiesPerDay:0,

  clcultingFunction: function () {

    for (let i = 0; i <workingHours.length; i++) {

      this.totalCustPerHour.push(this.gitCustNumPerHour(this.minNumOfCust,this.maxNumOfCust));


      this.totalCookiesPerHour.push(Math.floor(this.totalCustPerHour[i]*this.avgCookieperSale));

      this.totalCookiesPerDay=this.totalCookiesPerDay+this.totalCookiesPerHour[i];



    }
    console.log(this.totalCookiesPerHour);
    console.log(this.totalCustPerHour);
    console.log(this.totalCookiesPerDay);

  }


};


Seattle.clcultingFunction();
Seattle.gitCustNumPerHour();


//DOM

let parent1=document.getElementById('parent');
console.log(parent1);

let h2Element=document.createElement('h2');
// console.log(h2Element);

parent1.appendChild(h2Element);
// console.log(h2Element);

h2Element.textContent='Here are the working hours with expected sales per each location of Salmon Cookies :';

let locationName=document.createElement('h3');

parent1.appendChild(locationName);

locationName.textContent=Seattle.name;
// console.log(locationName);

let unorederdListHours=document.createElement('ul');
parent1.appendChild(unorederdListHours);

let listItemHours;
for (let i = 0; i <= workingHours.length; i++) {

  listItemHours=document.createElement('li');
  unorederdListHours.appendChild(listItemHours);
  listItemHours.textContent=`${workingHours[i]} : ${Seattle.totalCookiesPerHour[i]} cookies`;
  if (i===workingHours.length) {
    listItemHours.textContent=`Total : ${Seattle.totalCookiesPerDay} cookies`;
  }
}


//Tokyo////////////////////////////////////////////////////////////////////////////////////

let Tokyo={

  name: 'Tokyo',
  minNumOfCust:3,
  maxNumOfCust:24,
  avgCookieperSale:1.2,
  gitCustNumPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  totalCustPerHour:[],
  totalCookiesPerHour:[],
  totalCookiesPerDay:0,

  clcultingFunction: function () {

    for (let i = 0; i <workingHours.length; i++) {

      this.totalCustPerHour.push(this.gitCustNumPerHour(this.minNumOfCust,this.maxNumOfCust));


      this.totalCookiesPerHour.push(Math.floor(this.totalCustPerHour[i]*this.avgCookieperSale));

      this.totalCookiesPerDay=this.totalCookiesPerDay+this.totalCookiesPerHour[i];



    }
    console.log(this.totalCookiesPerHour);
    console.log(this.totalCustPerHour);
    console.log(this.totalCookiesPerDay);

  }


};


Tokyo.clcultingFunction();
Tokyo.gitCustNumPerHour();


//DOM////////

let locationName2=document.createElement('h3');

parent1.appendChild(locationName2);

locationName2.textContent=Tokyo.name;
// console.log(locationName);

let unorederdListHours2=document.createElement('ul');
parent1.appendChild(unorederdListHours2);

let listItemHours2;
for (let i = 0; i <= workingHours.length; i++) {

  listItemHours2=document.createElement('li');
  unorederdListHours2.appendChild(listItemHours2);
  listItemHours2.textContent=`${workingHours[i]} : ${Tokyo.totalCookiesPerHour[i]} cookies`;
  if (i===workingHours.length) {
    listItemHours2.textContent=`Total : ${Tokyo.totalCookiesPerDay} cookies`;
  }
}

//Dubai////////////////////////////////////////////////////////////////////////////////////

let Dubai={

  name: 'Dubai',
  minNumOfCust:11,
  maxNumOfCust:38,
  avgCookieperSale:3.7,
  gitCustNumPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  totalCustPerHour:[],
  totalCookiesPerHour:[],
  totalCookiesPerDay:0,

  clcultingFunction: function () {

    for (let i = 0; i <workingHours.length; i++) {

      this.totalCustPerHour.push(this.gitCustNumPerHour(this.minNumOfCust,this.maxNumOfCust));


      this.totalCookiesPerHour.push(Math.floor(this.totalCustPerHour[i]*this.avgCookieperSale));

      this.totalCookiesPerDay=this.totalCookiesPerDay+this.totalCookiesPerHour[i];



    }
    console.log(this.totalCookiesPerHour);
    console.log(this.totalCustPerHour);
    console.log(this.totalCookiesPerDay);

  }


};


Dubai.clcultingFunction();
Dubai.gitCustNumPerHour();


//DOM////////

let locationName3=document.createElement('h3');

parent1.appendChild(locationName3);

locationName3.textContent=Dubai.name;
// console.log(locationName);

let unorederdListHours3=document.createElement('ul');
parent1.appendChild(unorederdListHours3);

let listItemHours3;
for (let i = 0; i <= workingHours.length; i++) {

  listItemHours3=document.createElement('li');
  unorederdListHours3.appendChild(listItemHours3);
  listItemHours3.textContent=`${workingHours[i]} : ${Dubai.totalCookiesPerHour[i]} cookies`;
  if (i===workingHours.length) {
    listItemHours3.textContent=`Total : ${Dubai.totalCookiesPerDay} cookies`;
  }
}


//Paris////////////////////////////////////////////////////////////////////////////////////

let Paris={

  name: 'Paris',
  minNumOfCust:20,
  maxNumOfCust:38,
  avgCookieperSale:2.3,
  gitCustNumPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  totalCustPerHour:[],
  totalCookiesPerHour:[],
  totalCookiesPerDay:0,

  clcultingFunction: function () {

    for (let i = 0; i <workingHours.length; i++) {

      this.totalCustPerHour.push(this.gitCustNumPerHour(this.minNumOfCust,this.maxNumOfCust));


      this.totalCookiesPerHour.push(Math.floor(this.totalCustPerHour[i]*this.avgCookieperSale));

      this.totalCookiesPerDay=this.totalCookiesPerDay+this.totalCookiesPerHour[i];



    }
    console.log(this.totalCookiesPerHour);
    console.log(this.totalCustPerHour);
    console.log(this.totalCookiesPerDay);

  }


};


Paris.clcultingFunction();
Paris.gitCustNumPerHour();


//DOM////////

let locationName4=document.createElement('h3');

parent1.appendChild(locationName4);

locationName4.textContent=Paris.name;
// console.log(locationName);

let unorederdListHours4=document.createElement('ul');
parent1.appendChild(unorederdListHours4);

let listItemHours4;
for (let i = 0; i <= workingHours.length; i++) {

  listItemHours4=document.createElement('li');
  unorederdListHours4.appendChild(listItemHours4);
  listItemHours4.textContent=`${workingHours[i]} : ${Paris.totalCookiesPerHour[i]} cookies`;
  if (i===workingHours.length) {
    listItemHours4.textContent=`Total : ${Paris.totalCookiesPerDay} cookies`;
  }
}


//Lima////////////////////////////////////////////////////////////////////////////////////

let Lima={

  name: 'Lima',
  minNumOfCust:2,
  maxNumOfCust:16,
  avgCookieperSale:4.6,
  gitCustNumPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  totalCustPerHour:[],
  totalCookiesPerHour:[],
  totalCookiesPerDay:0,

  clcultingFunction: function () {

    for (let i = 0; i <workingHours.length; i++) {

      this.totalCustPerHour.push(this.gitCustNumPerHour(this.minNumOfCust,this.maxNumOfCust));


      this.totalCookiesPerHour.push(Math.floor(this.totalCustPerHour[i]*this.avgCookieperSale));

      this.totalCookiesPerDay=this.totalCookiesPerDay+this.totalCookiesPerHour[i];



    }
    console.log(this.totalCookiesPerHour);
    console.log(this.totalCustPerHour);
    console.log(this.totalCookiesPerDay);

  }


};


Lima.clcultingFunction();
Lima.gitCustNumPerHour();


//DOM////////

let locationName5=document.createElement('h3');

parent1.appendChild(locationName5);

locationName5.textContent=Lima.name;
// console.log(locationName);

let unorederdListHours5=document.createElement('ul');
parent1.appendChild(unorederdListHours5);

let listItemHours5;
for (let i = 0; i <= workingHours.length; i++) {

  listItemHours5=document.createElement('li');
  unorederdListHours5.appendChild(listItemHours5);
  listItemHours5.textContent=`${workingHours[i]} : ${Lima.totalCookiesPerHour[i]} cookies`;
  if (i===workingHours.length) {
    listItemHours5.textContent=`Total : ${Lima.totalCookiesPerDay} cookies`;
  }
}
