
// function writeUserData(ID, username1, name1, Date1, time11, time21, type1) {
//     getDatabase().ref('Book/' + ID).set({
//         username: username1,
//         name: name1,
//         date: Date1,
//         time1: time11,
//         time2: time21,
//         type: type1
//     });
// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// document.getElementById("submit-btn").addEventListener("click", submit);

// function submit() {
//     writeUserData("test", "Henwy", "tyler's mom", "23.8.2", "00:00", "23:59", "U.D.A")
//     const name = document.getElementById("name1")
//     const When = document.getElementById("date1")
//     const time1 = document.getElementById("time1")
//     const time2 = document.getElementById("time2")
//     const type = document.getElementById("type")
//     console.log("Name: " + name.value);
//     console.log("When: " + When.value);
//     console.log("Time: " + time1.value);
//     console.log("To What Time: " + time2.value);
//     console.log("type: " + type.value);
//     console.log("name: " + getCookie("username"));
// }
