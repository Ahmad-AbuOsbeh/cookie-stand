// 'use strict';

let workingHours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
// let shopsLocations=['Seattle','Tokyo','Dubai','Paris','Lima	'];

//making function to calculate a random number
function gitCustRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//make shop constructor to make one object foe each shop
//add this allShops array to store all objects data for each shop in one array, then we can invoked any content from it.
let allShops=[];
function Shop(name,minCust,maxCust,avgCookies) {

  this.name= name;
  this.minNumOfCust= minCust;
  this.maxNumOfCust= maxCust;
  this.avgCookieperSale= avgCookies;
  this.totalCustPerHour= [];
  this.totalCookiesPerHour= [];
  this.totalCookiesPerDay= 0;
  allShops.push(this);
}


//make 1st method in prototype to calculate number of customers each hour
Shop.prototype.calculatingCustomers=function () {

  for (let i = 0; i < workingHours.length; i++) {
    this.totalCustPerHour.push(gitCustRandomNumber(this.minNumOfCust,this.maxNumOfCust));

  }
  console.log(this.totalCustPerHour);
};
//make 2nd method in prototype for calculating number of cookies each hour and total cookies per day
Shop.prototype.clcultingCookiesPerHour=function () {
  for (let i = 0; i < workingHours.length; i++){

    this.totalCookiesPerHour.push(Math.floor(this.totalCustPerHour[i]*this.avgCookieperSale));
    this.totalCookiesPerDay+=this.totalCookiesPerHour[i];
  }
  console.log(this.totalCookiesPerHour);
  console.log(this.totalCookiesPerDay);

};

//start steps to make the table and render the results

//some global DOM commands here

let parent=document.getElementById('parent');
console.log(parent);

//add table tag

let table=document.createElement('table');
parent.appendChild(table);

//make function to add the Header of the table to creating the header

function makingTableHeader() {

  //add first row
  let fisrtRow=document.createElement('tr');
  table.appendChild(fisrtRow);

  //add 1st (empty) table header for the first row

  let tableHeader=document.createElement('th');
  fisrtRow.appendChild(tableHeader);
  tableHeader.textContent='  ';

  //add 14 table header for working hours

  for (let i = 0; i < workingHours.length; i++) {
    let tableHeader2_15=document.createElement('th');
    fisrtRow.appendChild(tableHeader2_15);
    tableHeader2_15.textContent=workingHours[i];
  }

  //add 16th table header (total cookies)

  let tableHeader16=document.createElement('th');
  fisrtRow.appendChild(tableHeader16);
  tableHeader16.textContent='Daily\nLocation\nTotal';
}


//make 3rd method to store each shop(object) data in the table
Shop.prototype.renderTable=function () {

  //add row for the one shop
  let rowForEachShop=document.createElement('tr');
  table.appendChild(rowForEachShop);

  //add cell name of the shop
  let shopNameBox=document.createElement('td');
  rowForEachShop.appendChild(shopNameBox);
  shopNameBox.textContent=this.name;
  // shopNameBox.style.border='2px solid';

  //add 14 table data for cookies per hour
  for (let i = 0; i < this.totalCookiesPerHour.length; i++) {
    let tableData2_15=document.createElement('td');
    rowForEachShop.appendChild(tableData2_15);
    tableData2_15.textContent=this.totalCookiesPerHour[i];
    // tableData2_15.setAttribute('border', '2px solid');
    // tableData2_15.style.border='2px solid';

  }

  //add total cookies per day for each shop
  let tableData16=document.createElement('td');
  rowForEachShop.appendChild(tableData16);
  tableData16.textContent=this.totalCookiesPerDay;
  // tableData16.style.border='2px solid';


};

//make 4th method to calculate total cookies for each shop per hour and final total of all shops per day
function renderFooterRow () {
  //add footer row
  let tableFooterRow=document.createElement('tr');
  table.appendChild(tableFooterRow);

  //add first cell in this footer row
  let footerCell_1=document.createElement('th');
  tableFooterRow.appendChild(footerCell_1);
  footerCell_1.textContent='Totals';
  // footerCell_1.style.border='2px solid red';

  //add total of cookies that saled at each hour for all shops
  let totalOfEachHourAllShops=0;
  for (let i = 0; i < workingHours.length; i++) {

    let footerCell_2_15 =document.createElement('th');
    tableFooterRow.appendChild(footerCell_2_15);

    for (let x = 0; x < allShops.length; x++) {

      totalOfEachHourAllShops+=(allShops[x].totalCookiesPerHour[i]);
      // console.log('total of 6 am',footerCell_2_15);

    }
    console.log('at 6 am cookies for each shop',totalOfEachHourAllShops);
    footerCell_2_15.textContent=totalOfEachHourAllShops;
    // footerCell_2_15.style.border='2px solid red';

    //most important thing to zero the value of some hour sums, to go to the first agin to clculate total of next hour whitout accumalation of the previous hour.
    totalOfEachHourAllShops=0;
  }
  //add all shops amount of cookies that saled whole the day
  let footerCell_16=document.createElement('th');
  tableFooterRow.appendChild(footerCell_16);

  let totalAllShops=0;
  for (let x = 0; x < allShops.length; x++) {

    totalAllShops+=allShops[x].totalCookiesPerDay;

  }

  footerCell_16.textContent=totalAllShops;
  // footerCell_16.style.border='2px solid red';

}

//create 5 objects, one for each location////////////////////////////////////////

//make new object by shop constructor for Seattle location
let Seattle= new Shop('Seattle',23,65,6.3);
console.log('object1',Seattle);

//make new object by shop constructor for Tokyo location
let Tokyo= new Shop('Tokyo',3,24,1.2);
console.log('object2',Tokyo);

//make new object by shop constructor for Dubai location
let Dubai= new Shop('Dubai',11,38,3.7);
console.log('object3',Dubai);

//make new object by shop constructor for Paris location
let Paris= new Shop('Paris',20,38,2.3);
console.log('object4',Paris);

//make new object by shop constructor for Lima location
let Lima= new Shop('Lima',2,16,4.6);
console.log('object5',Lima);


/*
now I have in the above:
- three general functions
    1-gitCustRandomNumber : its already called in other function above.
    2-makingTableHeader : I have to call it down
    3-renderFooterRow : I have to call it down

- three prototype functions
  1-calculatingCustomers
  2-clcultingCookiesPerHour
  3-renderTable

  I will call these prototype functions by for loop.

*/

//calling the table header function
makingTableHeader();

// calling all three prototypes functions
// for (let x = 0; x < allShops.length; x++) {
//   allShops[x].calculatingCustomers();
//   allShops[x].clcultingCookiesPerHour();
//   allShops[x].renderTable();

// }

//calling the form from HTML (sales.html)
let button=document.getElementById('shopForm');
button.addEventListener('submit',submitterFunction);

//define a function to make the submission process
function submitterFunction(event) {

  //prevent defualt behaviour of form tag
  event.preventDefault();
  console.log('event',event);

  //define 4 variables to store the inputted values
  let shopName=event.target.shopNameField.value;
  console.log('shopname',shopName);

  let minCustumers=event.target.minCustField.value;
  console.log('minCustumers',minCustumers);

  let maxCustumers=event.target.maxCustField.value;
  console.log('maxCustumers',maxCustumers);

  let avgCookies2=event.target.avgCookiesField.value;
  console.log('avgCookies2',avgCookies2);

  //make a new object for the new shop location
  let addNewShopLocation= new Shop(shopName,minCustumers,maxCustumers,avgCookies2);
  console.log('addNewShopLocation',addNewShopLocation);
  console.log('allShops data',allShops);

  /*call these two functions here not in the for loope, becuase already its calculated for all shops except the final one that will added by the submitter function.

  also,thier values in other objects still exist.
  but the render table content will be deleted,therefore we need to run the rendertable prototype function again by the next for loop in the submitter function.*/
  addNewShopLocation.calculatingCustomers();
  addNewShopLocation.clcultingCookiesPerHour();

  // call the div parent that contains the table
  let emptyPage=document.getElementById('parent');

  //make this div is empty
  emptyPage.textContent='';

  //create the table again, by its global variable
  table=document.createElement('table');
  parent.appendChild(table);

  //make the header again after deleting
  makingTableHeader();

  //render the content of allshops array again in the table
  for (let j = 0; j < allShops.length; j++) {
    // allShops[j].calculatingCustomers();
    // allShops[j].clcultingCookiesPerHour();
    allShops[j].renderTable();

  }
  //render the footer again after deleting
  renderFooterRow();


}

//calling all three prototypes function to calculate the data, then to render them in the table.
for (let x = 0; x < allShops.length; x++) {
  allShops[x].calculatingCustomers();
  allShops[x].clcultingCookiesPerHour();
  allShops[x].renderTable();

}



// console.log('allShops data',allShops);

//caling the footer function
renderFooterRow();













