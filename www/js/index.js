function openAlert(){
    var title = buildLorem(loremWords, 3);
    var body = buildLorem(loremWords, 10);
    navigator.notification.alert(
        body,
        function(){
            console.log("alert dismissed: "+title)
        },
        title
    );
}

function openAlerts(){
    console.log("opening 5 alerts");
    for(var i=0; i<5; i++){
        openAlert();
    }
}

function dismissPrevious(){
    console.log("Dismiss previous in 5s");
    setTimeout(function(){
        console.log("Dismissing previous");
        navigator.notification.dismissPrevious();
    }, 5000);
}

function dismissAll(){
    console.log("Dismiss all in 5s");
    setTimeout(function(){
        console.log("Dismissing all");
        navigator.notification.dismissAll();
    }, 5000);
}
