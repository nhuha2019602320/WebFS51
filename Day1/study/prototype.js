function person (fistName, lastName) {
    this.fistName = fistName;
    this.lastName = lastName;
}

person.prototype.showFullName = function () {
    console.log(this.fistName + ' ' + this.lastName)
}

person.prototype.convertLowCaseToUpcase = function () {
    
}