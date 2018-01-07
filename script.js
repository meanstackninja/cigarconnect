/* Create a cigar object constructor*/

function Cigar(brand,type,price){
    this.brand = brand;
    this.type = type;
    this.price = price;
}



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
function Coupon(cigar,location, discountPercentage){
    this.cigar = cigar;
    this.location = location;
    this.discountPercentage = discountPercentage;
    this.applyDiscount = function(discountPercentage){
        newPrice = cigar.price - (cigar.price * discountPercentage);
    }    

}


//todo later, create 2 arrays one for Cigar and one for Location and store the objects you create into the arrays


