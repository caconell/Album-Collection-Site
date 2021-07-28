import Artist from "./components/Artist";
import Artists from "./components/Artists";
import Song from "./components/Song";
import Songs from "./components/Songs";
//import Review from "./components/Review";
import Reviews from "./components/Reviews";
import Album from "./components/Album";
import Albums from "./components/Albums";

import Header from "./components/Header";
import Footer from "./components/Footer";

const AppDiv=document.getElementById("app");

//const HeaderURL="https://localhost:44313/api/todo";
const ArtistsURL="https://localhost:44313/api/artists/";
const SongsURL="https://localhost:44313/api/songs";
const ReviewsURL="https://localhost:44313/api/reviews";
const AlbumsURL="https://localhost:44313/api/albums";

export default() => {
    SetupHeader();
    SetupFooter();

    SetupNavEventListeners();
    
}

function SetupHeader()
{
    const HeaderElement=document.querySelector(".header");
    HeaderElement.innerHTML=Header();
}
function SetupFooter()
{
    const FooterElement=document.querySelector(".footer");
    FooterElement.innerHTML=Footer();
}




function SetupNavEventListeners()
{
    const HomeNavButton=document.querySelector(".nav_home");
    HomeNavButton.addEventListener("click",ResetAppDiv);

    const ArtistNavButton=document.querySelector(".nav_artists");
    //ArtistNavButton.addEventListener("click",NavArtistsFetch);
    ArtistNavButton.addEventListener("click",function(){NavFetch(1);});

    const SongNavButton=document.querySelector(".nav_songs");
    //SongNavButton.addEventListener("click",NavSongsFetch);
    SongNavButton.addEventListener("click",function(){NavFetch(2);});

    const ReviewNavButton=document.querySelector(".nav_reviews");
    //ReviewNavButton.addEventListener("click",NavReviewsFetch);
    ReviewNavButton.addEventListener("click",function(){NavFetch(3);});

    const AlbumNavButton=document.querySelector(".nav_albums");
    //AlbumNavButton.addEventListener("click",NavAlbumsFetch);
    AlbumNavButton.addEventListener("click",function(){NavFetch(4);});
}



let ToggleAddArtistButtonBoolean=false;
function ToggleAddArtistButton()
{
    if(ToggleAddArtistButton!==true)
    {
        CreateArtistDiv.innerHTML=`
            <label>Artist Name: </label>
            <input type="text" id="CreateArtist_TextField_Name" placeholder="Type here son."/><br/>

            <label>Artist Bio: </label>
            <input type="text" id="CreateArtist_TextField_Bio" placeholder="Type here son."/><br/>

            <label>Artist Age: </label>
            <input type="text" id="CreateArtist_TextField_Age" placeholder="Type here son."/><br/>

            <label>Artist Hometown: </label>
            <input type="text" id="CreateArtist_TextField_Hometown" placeholder="Type here son."/><br/>

            <label>Artist Record Label: </label>
            <input type="text" id="CreateArtist_TextField_RecordLabel" placeholder="Type here son."/><br/>

            <button id="SubmitNewArtist">Submit new artist</button>
        `;
        ToggleAddArtistButtonBoolean=true;

        const SubmitNewArtist=document.getElementById("SubmitNewArtist");
        SubmitNewArtist.addEventListener("click",AddArtist);
    }
    else
    {
        CreateArtistDiv.innerHTML=``;
        ToggleAddArtistButtonBoolean=false;
    }
}


let ToggleEditArtistButtonBoolean=false;
function ToggleEditArtistButton(artist)
{
    if(ToggleEditArtistButton!==true)
    {
        EditArtistDiv.innerHTML=`

            <input type="hidden" id="EditArtist_Hidden_Id" value="${artist.id}"/><br/>
            <label>Artist Name: </label>
            <input type="text" id="EditArtist_TextField_Name" value="${artist.name}"/><br/>

            <label>Artist Bio: </label>
            <input type="text" id="EditArtist_TextField_Bio" value="${artist.biography}"/><br/>

            <label>Artist Age: </label>
            <input type="text" id="EditArtist_TextField_Age" value="${artist.age}"/><br/>

            <label>Artist Hometown: </label>
            <input type="text" id="EditArtist_TextField_Hometown" value="${artist.hometown}"/><br/>

            <label>Artist Record Label: </label>
            <input type="text" id="EditArtist_TextField_RecordLabel" value="${artist.recordLabel}"/><br/>

            <button id="SubmitEditArtist">Update artist</button>
        `;
        ToggleEditArtistButtonBoolean=true;

        const SubmitEditArtist=document.getElementById("SubmitEditArtist");
        SubmitEditArtist.addEventListener("click",UpdateArtist);
    }
    else
    {
        EditArtistDiv.innerHTML=``;
        ToggleEditArtistButtonBoolean=false;
    }
}


function GoToArtistPage() {
    const artistDetails = document.querySelectorAll(".artist_page");
    artistDetails.forEach(artist => {
        artist.addEventListener("click", function () {
            let artistid = artist.id;
            let newArtistURL = ArtistsURL + artistid;

            fetch(newArtistURL).then(response => response.json())
                .then(data => {
                    AppDiv.innerHTML = Artist(data);
                    GoToAlbumPage();
                    SetupEditArtistElements(data);
                });
        });

    });

}
function SetupAddArtistElements()
{
    const SaveArtistButton=document.querySelector("#AddArtistButton");
    SaveArtistButton.addEventListener("click",function(){ToggleAddArtistButton();});
    const CreateArtistDiv=document.getElementById("CreateArtistDiv");


}

function AddArtist()
{
    
        let NewArtistName=document.getElementById("CreateArtist_TextField_Name").value;
        let NewArtistBio=document.getElementById("CreateArtist_TextField_Bio").value;

        let NewArtistAge=document.getElementById("CreateArtist_TextField_Age").value;
        let NewArtistHometown=document.getElementById("CreateArtist_TextField_Hometown").value;
        let NewArtistRecordLabel=document.getElementById("CreateArtist_TextField_RecordLabel").value;

        const RequestBody={
            Name:NewArtistName,
            Image:"",
            Biography:NewArtistBio,

            Age:NewArtistAge,
            Hometown:NewArtistHometown,
            RecordLabel:NewArtistRecordLabel
        };
        
        fetch(ArtistsURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(RequestBody)
        }).then(response => response.json())
        .then(data => {
            AppDiv.innerHTML=Artist(data);
        });
    
}







function SetupEditArtistElements(artist)
{
    const EditArtistButton=document.querySelector("#EditArtistButton");
    EditArtistButton.addEventListener("click",function(){ToggleEditArtistButton(artist);});
    const EditArtistDiv=document.getElementById("EditArtistDiv");


}


function UpdateArtist()
{
    
    let EditArtistId=document.getElementById("EditArtist_Hidden_Id").value;
    let EditArtistName=document.getElementById("EditArtist_TextField_Name").value;
        let EditArtistBio=document.getElementById("EditArtist_TextField_Bio").value;

        let EditArtistAge=document.getElementById("EditArtist_TextField_Age").value;
        let EditArtistHometown=document.getElementById("EditArtist_TextField_Hometown").value;
        let EditArtistRecordLabel=document.getElementById("EditArtist_TextField_RecordLabel").value;

        const RequestBody={
            Id:EditArtistId,
            Name:EditArtistName,
            Image:"",
            Biography:EditArtistBio,

            Age:EditArtistAge,
            Hometown:EditArtistHometown,
            RecordLabel:EditArtistRecordLabel
        };

        fetch(ArtistsURL + EditArtistId,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(RequestBody)
        }).then(response => response.text())
        .then(data => {
            fetch(ArtistsURL + EditArtistId)
            .then(response => response.json())
            .then(data => {
                AppDiv.innerHTML=Artist(data);
            });
        });
    
}



function GoToAlbumPage() {
    const albumDetails = document.querySelectorAll(".album_page");
    albumDetails.forEach(album => {
        album.addEventListener("click", function () {
            let albumid = album.id;
            let newAlbumURL = AlbumsURL + "/" + albumid;

            fetch(newAlbumURL).then(response => response.json())
                .then(data => {
                    AppDiv.innerHTML = Album(data);
                    GoToSongPage();
                });
        });

    });
}

function GoToSongPage() {
    const songDetails = document.querySelectorAll(".song_page");
    songDetails.forEach(song => {
        song.addEventListener("click", function () {
            let songid = song.id;
            let newSongURL = SongsURL + "/" + songid;

            fetch(newSongURL).then(response => response.json())
                .then(data => {
                    AppDiv.innerHTML = Song(data);

                });
        });

    });

}






function NavFetch(ID)
{
    let URLString="";
    switch(ID)
    {
        case 1:URLString=ArtistsURL;break;
        case 2:URLString=SongsURL;break;
        case 3:URLString=ReviewsURL;break;
        case 4:URLString=AlbumsURL;break;
    }
    fetch(URLString).then(response => response.json()).then(Data => {
        console.log(Data);
        switch(ID)
        {
            case 1:
                AppDiv.innerHTML=Artists(Data);
                GoToArtistPage();
                SetupAddArtistElements();
            break;

            case 2:
                AppDiv.innerHTML=Songs(Data);
                GoToSongPage();
            break;

            case 3:
                AppDiv.innerHTML=Reviews(Data);
            break;

            case 4:
                AppDiv.innerHTML=Albums(Data);
                GoToAlbumPage();
            break;
        }
    });
}
function ResetAppDiv()
{
    AppDiv.innerHTML="";
}
function NavArtistsFetch()
{
    fetch(ArtistsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Artists(Data);
    });
}
function NavSongsFetch()
{
    fetch(SongsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Songs(Data);
    });
}
function NavReviewsFetch()
{
    fetch(ReviewsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Reviews(Data);
    });
}
function NavAlbumsFetch()
{
    fetch(AlbumsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Albums(Data);
    });
}


{/* <ul>
<li>Bio: ${artist.biography}</li>
<li>Age: ${artist.age}</li>
<li>Hometown: ${artist.hometown}</li>
<li>Record Label: ${artist.recordLabel}</li>
</ul> */}