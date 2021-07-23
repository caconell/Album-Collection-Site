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

    NavArtists();
    NavSongs();
    NavReviews();
    NavAlbums();
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
function NavArtistsFetch()
{
    fetch(ArtistsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Artists(Data);
    });
}
function NavArtists()
{
    const ArtistNavButton=document.querySelector(".nav_artists");
    ArtistNavButton.addEventListener("click",NavArtistsFetch);
}
function NavSongsFetch()
{
    fetch(SongsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Songs(Data);
    });
}
function NavSongs()
{
    const SongNavButton=document.querySelector(".nav_songs");
    SongNavButton.addEventListener("click",NavSongsFetch);
}
function NavReviewsFetch()
{
    fetch(ReviewsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Reviews(Data);
    });
}
function NavReviews()
{
    const ReviewNavButton=document.querySelector(".nav_reviews");
    ReviewNavButton.addEventListener("click",NavReviewsFetch);
}
function NavAlbumsFetch()
{
    fetch(AlbumsURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Albums(Data);
    });
}
function NavAlbums()
{
    const AlbumNavButton=document.querySelector(".nav_albums");
    AlbumNavButton.addEventListener("click",NavAlbumsFetch);
}






/*
const navThing1=document.getElementById("navThing1");
const navThing2=document.getElementById("navThing2");
const navThing3=document.getElementById("navThing3");
const navThing4=document.getElementById("navThing4");
const navThing5=document.getElementById("navThing5");

function NavThingExecute(ID)
{
    switch(ID)
    {
        case 1:break;
        case 2:break;
        case 3:break;
        case 4:break;
        case 5:break;
    }
}

navThing1.addEventListener("click",function(){NavThingExecute(1);});
navThing2.addEventListener("click",function(){NavThingExecute(2);});
navThing3.addEventListener("click",function(){NavThingExecute(3);});
navThing4.addEventListener("click",function(){NavThingExecute(4);});
navThing5.addEventListener("click",function(){NavThingExecute(5);});
*/