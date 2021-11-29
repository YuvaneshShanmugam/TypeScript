var UserIdAutoIncrement = 1000;
var CourseIdAutoIncrement = 1000;
var NewUser = /** @class */ (function () {
    function NewUser(userName, age, phoneNo) {
        UserIdAutoIncrement++;
        this.UserId = UserIdAutoIncrement;
        this.UserName = userName;
        this.Age = age;
        this.PhoneNo = phoneNo;
    }
    return NewUser;
}());
var Enrollement = /** @class */ (function () {
    function Enrollement(courseName, requiredDays, userId) {
        CourseIdAutoIncrement++;
        this.CourseId = CourseIdAutoIncrement;
        this.CourseName = courseName;
        this.RequiredDays = requiredDays;
        this.UserId = userId;
    }
    return Enrollement;
}());
var userlist = new Array();
userlist.push(new NewUser("yuvanesh", 21, 9876543210));
var booklist = new Array();
function newUser() {
    document.getElementById("newUser").style.visibility = "visible";
    document.getElementById("mainDiv").style.visibility = "hidden";
}
function add() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var mno = document.getElementById("phoneNo").value;
    userlist.push(new NewUser(name, parseInt(age), parseInt(mno)));
    var id = userlist[userlist.length - 1].UserId;
    alert(id + "Registration Successful");
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("newUser").style.visibility = "hidden";
}
function GoTomainMenu() {
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("newUser").style.visibility = "hidden";
}
function logIn() {
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("mainDiv").style.visibility = "hidden";
}
function enter() {
    var login = parseInt(document.getElementById("logid").value);
    for (var i = 0; i < userlist.length; i++) {
        if (userlist[i].UserId == login) {
            document.getElementById("enterDiv").style.visibility = "visible";
            document.getElementById("login").style.visibility = "hidden";
        }
        // else{
        //     alert("Enter valid id");
        // }
    }
}
function availableCourse() {
    document.getElementById("availableCourse").style.visibility = "visible";
    document.getElementById("enterDiv").style.visibility = "hidden";
}
function EnrolledHistory() {
    document.getElementById("enrolled course").style.visibility = "visible";
    document.getElementById("enterDiv").style.visibility = "hidden";
}
function enroll() {
    var coursename = document.getElementById("course").value;
    var days = document.getElementById("timeToComplete").value;
    var userid = document.getElementById("id2").value;
    booklist.push(new Enrollement(coursename, parseInt(days), parseInt(userid)));
    var id = booklist[booklist.length - 1].CourseId;
    alert(id + "Entrolled successfully");
    document.getElementById("enrolledCourse").style.visibility = "visible";
    document.getElementById("availableCourse").style.visibility = "hidden";
}
function showHistory() {
    for (var i = 0; i < userlist.length; i++) {
        alert(i);
    }
}
