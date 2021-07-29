import * as DIV from "./var/div";
import Header from "./main/Header";
import Nav from "./main/Nav";
import Footer from "./main/Footer";
import * as NAV from "./nav";

//

export default() => {
    SetupPage();
    SetupNavEventListeners();
}
function SetupPage()
{
    const HeaderElement=document.querySelector(".header");
    HeaderElement.innerHTML=Header();

    const NavElement=document.querySelector("#nav");
    NavElement.innerHTML=Nav();

    const FooterElement=document.querySelector(".footer");
    FooterElement.innerHTML=Footer();
}
function SetupNavEventListeners()
{
    const HomeNavButton=document.querySelector(".nav_home");
    HomeNavButton.addEventListener("click",function(){DIV.DisplayDiv.innerHTML="";});

    const ArtistNavButton=document.querySelector(".nav_artists");
    ArtistNavButton.addEventListener("click",function(){NAV.NavFetch(1);});

    const SongNavButton=document.querySelector(".nav_songs");
    SongNavButton.addEventListener("click",function(){NAV.NavFetch(2);});

    const ReviewNavButton=document.querySelector(".nav_reviews");
    ReviewNavButton.addEventListener("click",function(){NAV.NavFetch(3);});

    const AlbumNavButton=document.querySelector(".nav_albums");
    AlbumNavButton.addEventListener("click",function(){NAV.NavFetch(4);});
}