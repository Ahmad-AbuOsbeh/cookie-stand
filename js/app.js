// 'use strict';

let workingHours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
// let shopsLocations=['Seattle','Tokyo','Dubai','Paris','Lima	'];

//calculate random number
function gitCustNumPerHour(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//some global DOM commands here

let parent=document.getElementById('parent');
console.log(parent);

//add table tag

let table=document.createElement('table');
parent.appendChild(table);

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
    this.totalCustPerHour.push(gitCustNumPerHour(this.minNumOfCust,this.maxNumOfCust));

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


//calling all three functions
Seattle.calculatingCustomers();
Seattle.clcultingCookiesPerHour();
Seattle.renderTable();

Tokyo.calculatingCustomers();
Tokyo.clcultingCookiesPerHour();
Tokyo.renderTable();

Dubai.calculatingCustomers();
Dubai.clcultingCookiesPerHour();
Dubai.renderTable();

Paris.calculatingCustomers();
Paris.clcultingCookiesPerHour();
Paris.renderTable();

Lima.calculatingCustomers();
Lima.clcultingCookiesPerHour();
Lima.renderTable();


// console.log('allShops data',allShops);

//caling the footer function
renderFooterRow();













