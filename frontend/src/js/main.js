import Artist from "./components/Artist";

import Header from "./components/Header";
import Footer from "./components/Footer";

const AppDiv=document.getElementById("app");

const HeaderURL="https://localhost:44313/api/Todo";
const ArtistsURL="https://localhost:44313/api/Artists";
const SongURL="";
const AlbumURL="";
const ReviewURL="";

export default() => {
    SetupHeader();
    SetupFooter();
    NavArtists();
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
    fetch(ArtistURL).then(response => response.json()).then(Data => {
        console.log(Data);
        AppDiv.innerHTML=Artists(Data);
    });
}
function NavArtists()
{
    const ArtistNavButton=document.querySelector(".nav_artists");
    ArtistNavButton.addEventListener("click",NavArtistsFetch);
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