window.onload = function () {

    $.get("data/tweets.json").then(function(tweets){
        console.log(tweets);
        return $.get("data/friends.json");
    }).then(function(friends){
        console.log(friends);
        return  $.get("data/videos.json");        
    }).then(function(videos){
        console.log(videos);        
    })

    // function get(url) {
    //     return new Promise(function (resolve, reject) {
    //         let xhttp = new XMLHttpRequest();
    //         xhttp.open("GET", url, true);
    //         xhttp.onload = function () {
    //             if (xhttp.status == 200) {
    //                 resolve(JSON.parse(xhttp.response));
    //             } else {
    //                 reject(xhttp.statusText);
    //             }
    //         };
    //         xhttp.onerror = function () {
    //             reject(xhttp.statusText);
    //         };
    //         xhttp.send();
    //     });
    // };
    // let promise = get("data/tweets.json");
    // promise.then(function (tweets) {
    //     console.log(tweets);
    //     return get("data/friends.json");
    // }).then(function(friends){
    //     console.log(friends);
    //     return get("data/videos.json");
    // }).then(function(friends){
    //     console.log(videos);
    // }).catch(function(error){
    //     console.log(error);
    // });


    // function handleError(jqXHR, textStatus, error){
    //     console.log(error);        
    // };
    // $.ajax({
    //     type: "GET",
    //     url: "data/tweets.json",
    //     success: cbTweets,
    //     error: handleError
    // });
    // function cbTweets(data) {
    //     console.log(data);
    //     $.ajax({
    //         type: "GET",
    //         url: "data/friends.json",
    //         success: cbFriends,
    //         error: handleError
    //     });
    // }
    // function cbFriends(data) {
    //     console.log(data);
    //     $.ajax({
    //         type: "GET",
    //         url: "data/videos.json",
    //         success: function (data) {
    //             console.log(data);
    //         },
    //         error: handleError
    //     });
    // }

    // function cb(data){
    //     console.log(data);
    // }
    // $.get("data/tweets.json", cb);
    // console.log("test");

    // function callback(val) {
    //     console.log(val);
    // }
    // let fruits = ["banana", "apple", "pear"];
    // fruits.forEach(callback);
    // console.log("done")
};