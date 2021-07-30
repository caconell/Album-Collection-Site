import * as URL from "./var/url";
import {DisplayDiv} from "./var/div";
import {Generic} from "./fetch";
import {CreateArtistToggle,UpdateArtistToggle,DeleteArtistToggle} from "./toggle";
import {CreateSongToggle,UpdateSongToggle,DeleteSongToggle} from "./toggle";
import {CreateReviewToggle,UpdateReviewToggle,DeleteReviewToggle} from "./toggle";
import {CreateAlbumToggle,UpdateAlbumToggle,DeleteAlbumToggle} from "./toggle";
import {DisplaySingleArtist} from "./display/Artist";
import {DisplaySingleSong} from "./display/Song";
import {DisplaySingleReview} from "./display/Review";
import {DisplaySingleAlbum} from "./display/Album";
import {ToggleButton} from "./var/toggle";


function ElementEventListener(element,fetch_url)
{
    let elementid = element.id;
    let newFetchURL = fetch_url + elementid;
    return Generic(newFetchURL);
}

export function SetupArtistsPage()
{
    //reset variable to false everytime.
    ToggleButton[0][0]=false;
    //page clickable elements.
    const ArtistElement = document.querySelectorAll(".artist_page");
    ArtistElement.forEach(artist => {
        artist.addEventListener("click",function() {
            ElementEventListener(artist,URL.ArtistsURL).then(data => {
                DisplayDiv.innerHTML = DisplaySingleArtist(data);
                SetupArtistPage(data);
            });
        });
    });
    //page buttons.
    const CreateArtistButton=document.querySelector("#CreateArtistButton");
    CreateArtistButton.addEventListener("click",function(){CreateArtistToggle();});
}
export function SetupArtistPage(artist_data)
{
    //reset variable to false everytime.
    ToggleButton[1][0]=false;
    ToggleButton[2][0]=false;

    const UpdateArtistButton=document.querySelector("#UpdateArtistButton");
    UpdateArtistButton.addEventListener("click",function(){UpdateArtistToggle(artist_data);});

    const DeleteArtistButton=document.querySelector("#DeleteArtistButton");
    DeleteArtistButton.addEventListener("click",function(){DeleteArtistToggle(artist_data);});
}
//
export function SetupSongsPage() {
    //reset variable to false everytime.
    ToggleButton[0][1]=false;

    const SongElement = document.querySelectorAll(".song_page");
    SongElement.forEach(song => {
        song.addEventListener("click",function() {
            ElementEventListener(song,URL.SongsURL).then(data => {
                DisplayDiv.innerHTML = DisplaySingleSong(data);
                SetupSongPage(data);
            });
        });
    });

    const CreateSongButton=document.querySelector("#CreateSongButton");
    CreateSongButton.addEventListener("click",CreateSongToggle);
}
export function SetupSongPage(song_data)
{
    //reset variable to false everytime.
    ToggleButton[1][1]=false;
    ToggleButton[2][1]=false;

    const UpdateSongButton=document.querySelector("#UpdateSongButton");
    UpdateSongButton.addEventListener("click",function(){UpdateSongToggle(song_data);});

    const DeleteSongButton=document.querySelector("#DeleteSongButton");
    DeleteSongButton.addEventListener("click",function(){DeleteSongToggle(song_data);});
}
//
export function SetupReviewsPage()
{
    //reset variable to false everytime.
    ToggleButton[0][2]=false;



    //const CreateReviewButton=document.querySelector("#CreateReviewButton");
    //CreateReviewButton.addEventListener("click",CreateReviewToggle);
}
function SetupReviewPage(review_data)
{
    //reset variable to false everytime.
    ToggleButton[1][2]=false;
    ToggleButton[2][2]=false;

    const UpdateReviewButton=document.querySelector("#UpdateReviewButton");
    UpdateReviewButton.addEventListener("click",function(){UpdateReviewToggle(review_data);});

    const DeleteReviewButton=document.querySelector("#DeleteReviewButton");
    DeleteReviewButton.addEventListener("click",function(){DeleteReviewToggle(review_data);});
}
//
export function SetupAlbumsPage()
{
    //reset variable to false everytime.
    ToggleButton[0][3]=false;

    const albumDetails = document.querySelectorAll(".album_page");
    albumDetails.forEach(album => {
        album.addEventListener("click",function() {
            ElementEventListener(album,URL.AlbumsURL).then(data => {
                DisplayDiv.innerHTML = DisplaySingleAlbum(data);
                SetupAlbumPage();
            });
        });
    });

    const CreateAlbumButton=document.querySelector("#CreateAlbumButton");
    CreateAlbumButton.addEventListener("click",CreateAlbumToggle);
}
export function SetupAlbumPage(album_data)
{
    //reset variable to false everytime.
    ToggleButton[1][3]=false;
    ToggleButton[2][3]=false;

    const UpdateAlbumButton=document.querySelector("#UpdateAlbumButton");
    UpdateAlbumButton.addEventListener("click",function(){UpdateAlbumToggle(album_data);});

    const DeleteAlbumButton=document.querySelector("#DeleteAlbumButton");
    DeleteAlbumButton.addEventListener("click",function(){DeleteAlbumToggle(album_data);});
}