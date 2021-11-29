let UserIdAutoIncrement = 1000;
let CourseIdAutoIncrement = 1000;
class NewUser
{
    UserId:number;
    UserName:string;
    Age:number;
    PhoneNo:number;

    constructor(userName:string,age:number,phoneNo:number)
    {
        UserIdAutoIncrement++;
        this.UserId=UserIdAutoIncrement;
        this.UserName=userName;
        this.Age=age;
        this.PhoneNo=phoneNo;
    }
}
class Enrollement
{
    CourseId:number;
    CourseName:string;
    RequiredDays:number;
    UserId:number;

    constructor(courseName:string,requiredDays:number,userId:number)
    {
        CourseIdAutoIncrement++;
        this.CourseId=CourseIdAutoIncrement;
        this.CourseName=courseName;
        this.RequiredDays=requiredDays;
        this.UserId=userId;
    }
}
let userlist:Array<NewUser> = new Array<NewUser>();
userlist.push(new NewUser("yuvanesh",21,9876543210));
let booklist:Array<Enrollement>= new Array<Enrollement>();
function newUser()
{
    (document.getElementById("newUser") as HTMLDivElement).style.visibility = "visible";
    (document.getElementById("mainDiv") as HTMLDivElement).style.visibility = "hidden";
 
}
function add()
{
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let age = (document.getElementById("age") as HTMLInputElement).value;
    let mno = (document.getElementById("phoneNo") as HTMLInputElement).value;

    userlist.push(new NewUser(name,parseInt(age),parseInt(mno)));
    let id = userlist[userlist.length-1].UserId;
    alert(id+"Registration Successful");
    (document.getElementById("login") as HTMLDivElement).style.visibility = "visible";
    (document.getElementById("newUser") as HTMLDivElement).style.visibility = "hidden";
    
}
function GoTomainMenu()
{
    (document.getElementById("login") as HTMLDivElement).style.visibility = "visible";
    (document.getElementById("newUser") as HTMLDivElement).style.visibility = "hidden";
}

function logIn()
{
    (document.getElementById("login") as HTMLDivElement).style.visibility = "visible";
    (document.getElementById("mainDiv") as HTMLDivElement).style.visibility = "hidden";
}   
function enter()
{
   let login = parseInt((document.getElementById("logid") as HTMLInputElement).value);
   for(let i =0;i < userlist.length;i++)
   {
    if(userlist[i].UserId == login)
    {
        (document.getElementById("enterDiv") as HTMLDivElement).style.visibility = "visible";
        (document.getElementById("login") as HTMLDivElement).style.visibility = "hidden";
    }
    else{
        alert("Enter valid id");
    }
   }
  
} 

function availableCourse()
{
    (document.getElementById("availableCourse") as HTMLDivElement).style.visibility = "visible";
    (document.getElementById("enterDiv") as HTMLDivElement).style.visibility = "hidden";
}
function EnrolledHistory()
{
    (document.getElementById("enrolled course") as HTMLDivElement).style.visibility = "visible";
    (document.getElementById("enterDiv") as HTMLDivElement).style.visibility = "hidden";
}
function enroll()
{
    let coursename = (document.getElementById("course") as HTMLInputElement).value;
    let days = (document.getElementById("timeToComplete") as HTMLInputElement).value;
    let userid = (document.getElementById("id2") as HTMLInputElement).value;
    booklist.push(new Enrollement(coursename,parseInt(days),parseInt(userid)));
    let id = booklist[booklist.length-1].CourseId;
    alert(id+"Entrolled successfully");
    (document.getElementById("enrolledCourse") as HTMLDivElement).style.visibility = "visible";
    (document.getElementById("availableCourse") as HTMLDivElement).style.visibility = "hidden";
}
function showHistory()
{
    for(let i=0;i < booklist.length;i++)
    {
        // show.innerHTML += `${booklist[i].CourseName}`;
        // +='${booklist[i].CourseName}'

    }
}