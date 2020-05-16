var Songs = /** @class */ (function () {
    function Songs(Song_name) {
        this.Name = Song_name;
    }
    Songs.prototype.play = function (Status) {
        var audio = document.createElement("audio");
        audio.setAttribute("src", "" + this.Name);
        var d = document.getElementById("songss");
        d.appendChild(audio);
    };
    return Songs;
}());
var Playlist = /** @class */ (function () {
    function Playlist(P_name) {
        this.P_Name = P_name;
    }
    return Playlist;
}());
var Add_song = function () {
    var song1 = new Songs(document.getElementById("s_name").value);
    var Playlist1 = new Playlist(document.getElementById("p_name").value);
    song1.play(Playlist1);
};
//Div element to 
