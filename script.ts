

class Songs {
    Name: HTMLInputElement;
    Playtime: Number;
    constructor(Song_name: HTMLInputElement) {
        this.Name = Song_name


    }
    play(Status: Playlist) {
        var audio = document.createElement("audio");
        audio.setAttribute("src",`${this.Name}`);
        var d = document.getElementById("songss");
        d.appendChild(audio);
        
    }
}

class Playlist{

    P_Name:HTMLInputElement;
    
    constructor(P_name: HTMLInputElement) {
        this.P_Name = P_name


    }

}


let Add_song = () => {
    
    
    let song1 = new Songs(<HTMLInputElement>document.getElementById("s_name").value);
    let Playlist1 = new Playlist(<HTMLInputElement>document.getElementById("p_name").value);
    song1.play(Playlist1)

}




//Div element to 