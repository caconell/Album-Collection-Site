//import ArtistsURL from "./var/url";
//import SongsURL from "./var/url";
//import ReviewsURL from "./var/url";
//import AlbumsURL from "./var/url";
import * as DIV from "./var/div";
import * as URL from "./var/url";

import {DisplayArtistList} from "./display/Artist"; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import {DisplaySongList} from "./display/Song";
import {DisplayReviewList} from "./display/Review";
import {DisplayAlbumList} from "./display/Album";

import {Generic} from "./fetch";
import {SetupArtistsPage,SetupSongsPage,SetupReviewsPage,SetupAlbumsPage} from "./page_setup";

export function NavFetch(ID)
{
    let URLString="";
    switch(ID)
    {
        case 1:URLString=URL.ArtistsURL;break;
        case 2:URLString=URL.SongsURL;break;
        case 3:URLString=URL.ReviewsURL;break;
        case 4:URLString=URL.AlbumsURL;break;
    }
    Generic(URLString).then(Data => {
        console.log(Data);
        switch(ID)
        {
            case 1:
                DIV.DisplayDiv.innerHTML=DisplayArtistList(Data);
                SetupArtistsPage();
            break;

            case 2:
                DIV.DisplayDiv.innerHTML=DisplaySongList(Data);
                SetupSongsPage();
            break;

            case 3:
                DIV.DisplayDiv.innerHTML=DisplayReviewList(Data);
                SetupReviewsPage();
            break;

            case 4:
                DIV.DisplayDiv.innerHTML=DisplayAlbumList(Data);
                SetupAlbumsPage();
            break;
        }
    });
}