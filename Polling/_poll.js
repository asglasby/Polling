var myApp = {};
myApp.WriteOutput = function () { };
myApp.GetMessages = function () { };
myApp.PostMessage = function () {
    var request = new XMLHttpRequest();
    request.open("POST",
        "https://domo.firebaseio.com/.json",
        true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            myApp.Poll();
        }
    }
    request.send(JSON.stringify("Stamp: " + Date.now()));
};
myApp.Poll = function () {
    // myApp.interval = setInterval(myApp.PostMessage, 3000);
    setTimeout(function () { myApp.PostMessage(); }, 3000);
};