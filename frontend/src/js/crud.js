import * as FETCH from "./fetch.js";
import * as URL from "./var/url";
import {DisplayDiv} from "./var/div";

import {DisplaySingleArtist} from "./display/Artist";
import {DisplaySingleSong} from "./display/Song";

import {SetupArtistPage,SetupSongPage} from "./page_setup";

export function CreateArtist()
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
    
    FETCH.Create(URL.ArtistsURL,RequestBody).then(data => {
        DisplayDiv.innerHTML=DisplaySingleArtist(data);
        SetupArtistPage(data);
    });
}
export function UpdateArtist()
{
    let UpdateArtistId=document.getElementById("UpdateArtist_Hidden_Id").value;
    let UpdateArtistName=document.getElementById("UpdateArtist_TextField_Name").value;
    let UpdateArtistBio=document.getElementById("UpdateArtist_TextField_Bio").value;

    let UpdateArtistAge=document.getElementById("UpdateArtist_TextField_Age").value;
    let UpdateArtistHometown=document.getElementById("UpdateArtist_TextField_Hometown").value;
    let UpdateArtistRecordLabel=document.getElementById("UpdateArtist_TextField_RecordLabel").value;

    const RequestBody={
        Id:UpdateArtistId,
        Name:UpdateArtistName,
        Image:"",
        Biography:UpdateArtistBio,

        Age:UpdateArtistAge,
        Hometown:UpdateArtistHometown,
        RecordLabel:UpdateArtistRecordLabel
    };

    FETCH.Update(URL.ArtistsURL + UpdateArtistId,RequestBody).then(data => {
        FETCH.Generic(URL.ArtistsURL + UpdateArtistId).then(data => {
            DisplayDiv.innerHTML=DisplaySingleArtist(data);
            SetupArtistPage(data);
        });
    });
}
export function DeleteArtist()
{
    let DeleteArtistId=document.getElementById("DeleteArtist_Hidden_Id").value;
    
    const RequestBody={
        Id:DeleteArtistId
    };
    
    FETCH.Delete(URL.ArtistsURL + DeleteArtistId,RequestBody).then(data => {
        FETCH.GenericText(URL.ArtistsURL + DeleteArtistId).then(data => {
            DisplayDiv.innerHTML=`<p>Artist deleted.</p>`;
        });
    });
    

    /*
    let DeleteArtistId=document.getElementById("DeleteArtist_Hidden_Id").value;
    
    const RequestBody={
        Id:DeleteArtistId
    };
    
    fetch(URL.ArtistsURL + DeleteArtistId,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(RequestBody)
    }).then(response => response.text())
    .then(data => {
        fetch(URL.ArtistsURL + DeleteArtistId)
        .then(response => response.json())
        .then(data => {
            DisplayDiv.innerHTML=`<p>Artist deleted.</p>`;
        });
    });
    */
}

//

export function CreateSong()
{
    let CreateSongName=document.getElementById("CreateSong_TextField_Name").value;
    let CreateSongAlbum=document.getElementById("CreateSong_DropDown_Album").value;
    ////let CreateSongArtist=document.getElementById("CreateSong_TextField_Artist").value;
    let CreateSongDuration=document.getElementById("CreateSong_TextField_Duration").value;
    let CreateSongLink=document.getElementById("CreateSong_TextField_Link").value;

    const RequestBody={
        Name:CreateSongName,
        AlbumId:CreateSongAlbum,
        ////Artist:CreateSongArtist,
        Duration:CreateSongDuration,
        Link:CreateSongLink
    };
    
    FETCH.Create(URL.SongsURL,RequestBody).then(data => {
        FETCH.Generic(URL.SongsURL + data.id).then(data => {
            DisplayDiv.innerHTML=DisplaySingleSong(data);
            SetupSongPage(data);
        });
        
    });
}
export function UpdateSong()
{
    let UpdateSongId=document.getElementById("UpdateSong_Hidden_Id").value;

    let UpdateSongName=document.getElementById("UpdateSong_TextField_Name").value;
    let UpdateSongAlbum=document.getElementById("UpdateSong_DropDown_Album").value;
    //let UpdateSongArtist=document.getElementById("UpdateSong_TextField_Artist").value;
    let UpdateSongDuration=document.getElementById("UpdateSong_TextField_Duration").value;
    let UpdateSongLink=document.getElementById("UpdateSong_TextField_Link").value;

    const RequestBody={
        Id:UpdateSongId,
        Name:UpdateSongName,
        AlbumId:UpdateSongAlbum,
     //   Artist:UpdateSongArtist,
        Duration:UpdateSongDuration,
        Link:UpdateSongLink
    };
console.log(UpdateSongId);
    FETCH.Update(URL.SongsURL + UpdateSongId,RequestBody).then(data => {
        console.log(data);
        FETCH.Generic(URL.SongsURL + UpdateSongId).then(data => {
            DisplayDiv.innerHTML=DisplaySingleSong(data);
            SetupSongPage(data);
        });
    });
}
export function DeleteSong()
{
    let DeleteSongId=document.getElementById("DeleteSong_Hidden_Id").value;
    
    const RequestBody={
        Id:DeleteSongId
    };
    
    FETCH.Delete(URL.SongsURL + DeleteSongId,RequestBody).then(data => {
        FETCH.GenericText(URL.SongsURL + DeleteSongId).then(data => {
            DisplayDiv.innerHTML=`<p>Song deleted.</p>`;
        });
    });
}