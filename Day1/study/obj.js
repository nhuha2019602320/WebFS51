var person = {
    firstname: "hai",
    lastname: "tran nhu",
    showName: function () {
        console.log(this.firstname + this.lastname)
    },
    22: 'age'
};
// console.log(person)

var psn = new Object();
psn.firstname = "hai";
psn.lastname = "trna nhu";
psn.showName = function () {
    console.log(this.firstname + " " + this.lastname)
}
// console.log(psn)
// console.log(person.firstname)
// console.log(person['firstname'])
console.log(person['22'])
//duyệt từng phần tử trong obj
for (var ps in person) {
    console.log(ps)
}
//xóa phần tử trong obj
delete person.firstname;
person.sex = "nam"

//chuỗi json => dảng key-value
//mongo DB => key-value
//serialize và deserialize => convvert
JSON.stringify(person);
var jsonVariable = {"name": "hai", "lastname": "tran"}
var newobj = JSON.parse(jsonVariable)
console.log(newobj.name)

//convert json sang obj