//import Artist from "./components/Artist";
import Artists from "./components/Artists";
//import Song from "./components/Song";
import Songs from "./components/Songs";
//import Review from "./components/Review";
import Reviews from "./components/Reviews";
//import Album from "./components/Album";
import Albums from "./components/Albums";

import Header from "./components/Header";
import Footer from "./components/Footer";

const AppDiv=document.getElementById("app");

//const HeaderURL="https://localhost:44313/api/todo";
const ArtistsURL="https://localhost:44313/api/artists";
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
            case 1:AppDiv.innerHTML=Artists(Data);break;
            case 2:AppDiv.innerHTML=Songs(Data);break;
            case 3:AppDiv.innerHTML=Reviews(Data);break;
            case 4:AppDiv.innerHTML=Albums(Data);break;
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