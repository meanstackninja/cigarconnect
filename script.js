




/* Create a cigar object constructor*/

function Cigar(brand,type,price){
    this.brand = brand;
    this.type = type;
    this.price = price;
}

var oliva = new Cigar("Oliva", "Serie-V", 10.00);
// console.log(oliva);

function Location(streetNum,streetName,city,state,zip,phoneNumber,siteUrl,bLounge,bInetAccess,hoursOfOperation){
    this.streetNum = streetNum;
    this.streetName = streetName;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.siteUrl = siteUrl;
    this.bLounge = bLounge;
    this.bInetAccess = bInetAccess;
    this.hoursOfOperation = hoursOfOperation;

    this.changeHoursOfOperation = function(newHours){
        this.hoursOfOperation = newHours;
    }


}

//Create a Coupon Object constructor
function Coupon(cigar,location,discountPercentage){
    this.cigar = cigar;
    this.location = location;
    this.discountPercentage = discountPercentage;
    this.newPrice;
    this.applyDiscount = function(discountPercentage){
        this.newPrice = cigar.price - (cigar.price * discountPercentage);
    }    

}

var Coupon = new Coupon(oliva,"Dummy Location for now", .10);
Coupon.applyDiscount(this.discountPercentage);
// console.log(Coupon.newPrice);

// console.log(Coupon);


//todo later, create 2 arrays one for Cigar and one for Location and store the objects you create into the arrays

console.log(navigator.appCodeName);