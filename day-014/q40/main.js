function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album[tracks];
    }
    return album;
}
console.log(make_album("diljit", "GOAT"));
console.log(make_album("honey", "desi kalakaar"));
console.log(make_album("young stunners", "whynotmerijan", 22));