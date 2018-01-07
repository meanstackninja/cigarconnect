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


