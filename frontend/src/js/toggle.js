import {ToggleButton} from "./var/toggle";

import {CreateArtist,UpdateArtist,DeleteArtist} from "./crud";
import {CreateSong,UpdateSong,DeleteSong} from "./crud";
import {CreateAlbum,UpdateAlbum,DeleteAlbum} from "./crud";

import {CreateReview,UpdateReview,DeleteReview} from "./crud";

import {AlbumsURL,ArtistsURL} from "./var/url";

/*
function call()
{
    let ArrayToPass=[];
    let ItemArray=["Name","Bio","Age","Hometown","RecordLabel","Submit"];
    for(let i=0;i<ItemArray.length;i++)
    {
        ArrayToPass[i][0]=((!(i>=(ItemArray.length-1)))?1:2);
        ArrayToPass[i][1]=((!(i>=(ItemArray.length-1)))?true:false);
        ArrayToPass[i][2]="Create";
        ArrayToPass[i][3]="Artist";
        ArrayToPass[i][4]=ItemArray[i];
        ArrayToPass[i][5]=((!(i>=(ItemArray.length-1)))?"Type here son.":"Submit new artist.");
    }

    let ArrayToPass=[];
    for(let i=0;i<6;i++)
    {
        ArrayToPass[i][0]=((i!=5)?1:2);
        ArrayToPass[i][1]=((i!=5)?true:false);
        ArrayToPass[i][2]="Create";
        ArrayToPass[i][3]="Artist";
        ArrayToPass[i][5]=((i!=5)?"Type here son.":"Submit new artist.");
    }
    ArrayToPass[0][4]="Name";
    ArrayToPass[1][4]="Bio";
    ArrayToPass[2][4]="Age";
    ArrayToPass[3][4]="Hometown";
    ArrayToPass[4][4]="RecordLabel";
    ArrayToPass[5][4]="Submit";

    Refactored(ToggleButton[0][0],CreateArtistDiv,[
        //Element type, include label, crud operation, thing it's for, Attribute / action, extra tag text, extra tag attribute name.
        [1,true,"Create","Artist","Name","Type here son."],
        [1,true,"Create","Artist","Bio","Type here son."],
        [1,true,"Create","Artist","Age","Type here son."],
        [1,true,"Create","Artist","Hometown","Type here son."],
        [1,true,"Create","Artist","RecordLabel","Type here son."],
        [2,false,"Create","Artist","Submit","Submit new artist."] //<button id="SubmitNewArtist">Submit new artist</button>
    ]);
}
*/
function Refactored(Bool,Element,InformationArray) //basic code generator.
{
    if(Bool!==true)
    {
        let InnerHTML="";
        for(let i=0;i<InformationArray.length;i++)
        {
            //put a label at the beginning, if you want one.
            if(InformationArray[i][1]===true)
                InnerHTML+="<label>"+InformationArray[i][3]+" "+InformationArray[i][4]+": <\/label>";
            //setup for what type of element id being used.
            let ElementType="";
            let SelfClosing=false;
            //does what type of element we want to use.
            switch(InformationArray[i][0])
            {
                case 1:ElementType="TextField";InnerHTML+=`<input type="text"`;SelfClosing=true;break;
                case 2:ElementType="Button";InnerHTML+=`<button`;SelfClosing=false;break;
                case 3:ElementType="Hidden";InnerHTML+=`<input type="hidden"`;SelfClosing=true;break;
            }
            //inserts an id for that element created.
            InnerHTML+=` id="`+InformationArray[i][2]+InformationArray[i][3]+`_`+ElementType+`_`+InformationArray[i][4]+`"`;
            //for placeholder attribute at the end of tag attributes.
            if(
                (InformationArray[i][5]!==undefined&&InformationArray[i][5]!==null)&&
                (InformationArray[i][6]!==undefined&&InformationArray[i][6]!==null)
            )
            switch(InformationArray[i][0])
            {
                case 1:case 3:InnerHTML+=` `+InformationArray[i][6]+`="`+InformationArray[i][5]+`"`;break;
            }
            //checking if it's a tag that self closes, like input.
            InnerHTML+=((SelfClosing===true)?"\/":"")+">";
            //inserts text in-between tag if appliciable.
            if(InformationArray[i][5]!==undefined&&InformationArray[i][5]!==null)
            switch(InformationArray[i][0])
            {
                case 2:InnerHTML+=InformationArray[i][5];
            }
            //closing tag if needed.
            if(SelfClosing!==true)
            switch(InformationArray[i][0])
            {
                case 2:InnerHTML+="<\/button>";
            }
            //inserts a break automatically as long as it's not the last element.
            InnerHTML+=((!((i+1)>=InformationArray.length))?"<br\/>":"");
        }
        console.log(InnerHTML);
        Element.innerHTML=InnerHTML;
        Bool=true;
    }
    else
    {
        console.log("else");
        Element.innerHTML="";
        Bool=false;
    }
    return Bool;
}



export function CreateArtistToggle()
{
    let ArrayToPass=[];
    let ItemArray=["Name","Bio","Age","Hometown","RecordLabel","Submit"];
    for(let i=0;i<ItemArray.length;i++)
    {
        ArrayToPass[i]=[];
        ArrayToPass[i][0]=((!(i>=(ItemArray.length-1)))?1:2);
        ArrayToPass[i][1]=((!(i>=(ItemArray.length-1)))?true:false);
        ArrayToPass[i][2]="Create";
        ArrayToPass[i][3]="Artist";
        ArrayToPass[i][4]=ItemArray[i];
        ArrayToPass[i][5]=((!(i>=(ItemArray.length-1)))?"Type here son.":"Submit new artist.");
        ArrayToPass[i][6]="placeholder";
    }
    ToggleButton[0][0]=Refactored(ToggleButton[0][0],CreateArtistDiv,ArrayToPass);
    console.log(ToggleButton[0][0]);

    if(ToggleButton[0][0]===true)
    {
        const CreateArtistSubmitButton=document.getElementById("CreateArtist_Button_Submit");
        CreateArtistSubmitButton.addEventListener("click",CreateArtist);
    }
}
export function UpdateArtistToggle(artist)
{
    ToggleButton[2][0]=false;
    ToggleButton[1][0]=Refactored(ToggleButton[1][0],UDArtistDiv,[
        //Element type, include label, crud operation, thing it's for, Attribute / action, extra tag text, extra tag attribute name.
        [3,false,"Update","Artist","Id",artist.id,"value"],
        [1,true,"Update","Artist","Name",artist.name,"value"],
        [1,true,"Update","Artist","Bio",artist.biography,"value"],
        [1,true,"Update","Artist","Age",artist.age,"value"],
        [1,true,"Update","Artist","Hometown",artist.hometown,"value"],
        [1,true,"Update","Artist","RecordLabel",artist.recordLabel,"value"],
        [2,false,"Update","Artist","Submit","Update artist"] //<button id="SubmitNewArtist">Submit new artist</button>
    ]);
    
    if(ToggleButton[1][0]===true)
    {
        const UpdateArtistSubmitButton=document.getElementById("UpdateArtist_Button_Submit");
        UpdateArtistSubmitButton.addEventListener("click",UpdateArtist);
    }
}
export function DeleteArtistToggle(artist)
{
    ToggleButton[1][0]=false;
    ToggleButton[2][0]=Refactored(ToggleButton[2][0],UDArtistDiv,[
        //Element type, include label, crud operation, thing it's for, Attribute / action, extra tag text, extra tag attribute name.
        [3,false,"Delete","Artist","Id",artist.id,"value"],
        [2,false,"Delete","Artist","Submit","Confirm the deletion of its existance"] //<button id="SubmitNewArtist">Submit new artist</button>
    ]);
    
    if(ToggleButton[2][0]===true)
    {
        const DeleteArtistSubmitButton=document.getElementById("DeleteArtist_Button_Submit");
        DeleteArtistSubmitButton.addEventListener("click",DeleteArtist);
    }
}



export function CreateSongToggle()
{
    if(ToggleButton[0][1]!==true)
    {
        fetch(AlbumsURL).then(response => response.json()).then(data => {

      

        CreateSongDiv.innerHTML=`
            <label>Song Name: </label>
            <input type="text" id="CreateSong_TextField_Name" placeholder="Type here son."/><br/>

            <label>Song Album: </label>
            <select id="CreateSong_DropDown_Album">
            ${data.map(album => {
                return `
                    <option value ="${album.id}">${album.name}</option>
                  
                `;
            }).join('')}
            </select><br/>

            <label>Song Duration: </label>
            <input type="text" id="CreateSong_TextField_Duration" placeholder="Type here son."/><br/>

            <label>Song Link: </label>
            <input type="text" id="CreateSong_TextField_Link" placeholder="Type here son."/><br/>

            <button id="CreateSong_Button_Submit">Create song</button>
        `;
        const CreateSongSubmitButton=document.getElementById("CreateSong_Button_Submit");
        CreateSongSubmitButton.addEventListener("click", CreateSong);
    });
    ToggleButton[0][1]=true;
    }
    else
    {
        CreateSongDiv.innerHTML=``;
        ToggleButton[0][1]=false;
    }
}
export function UpdateSongToggle(song)
{
    ToggleButton[2][1]=false;

    if (ToggleButton[1][1] !== true) {

        fetch(AlbumsURL).then(response => response.json()).then(data => {

        UDSongDiv.innerHTML = `
        <input type = "hidden" id="UpdateSong_Hidden_Id" value="${song.id}" />
        <label>Song Name: </label>
        <input type="text" id="UpdateSong_TextField_Name" value="${song.name}"/><br/>
    
        <label>Song Album: </label>
        <select id="UpdateSong_DropDown_Album">
     ${data.map(album => {
            return `
            <option value ="${album.id}">${album.name}</option>
          
        `;
        }).join('')}
        </select><br/>
    
        <label>Song Duration: </label>
        <input type="text" id="UpdateSong_TextField_Duration" value="${song.duration}"/><br/>
    
        <label>Song Link: </label>
        <input type="text" id="UpdateSong_TextField_Link" value="${song.link}"/><br/>
    
        <button id="UpdateSong_Button_Submit">Update song</button>
    `;
        const UpdateSongSubmitButton=document.getElementById("UpdateSong_Button_Submit");
        UpdateSongSubmitButton.addEventListener("click",UpdateSong);
        });
    }

    else
    {
        UDSongDiv.innerHTML=``;
        ToggleButton[1][1]=false;
    }
}
export function DeleteSongToggle(song)
{
    ToggleButton[1][1]=false;
    ToggleButton[2][1]=Refactored(ToggleButton[2][1],UDSongDiv,[
        //Element type, include label, crud operation, thing it's for, Attribute / action, extra tag text, extra tag attribute name.
        [3,false,"Delete","Song","Id",song.id,"value"],
        [2,false,"Delete","Song","Submit","Confirm the deletion of its existance"]
    ]);
    
    if(ToggleButton[2][1]===true)
    {
        const DeleteSongSubmitButton=document.getElementById("DeleteSong_Button_Submit");
        DeleteSongSubmitButton.addEventListener("click",DeleteSong);
    }
}


export function CreateAlbumToggle()
{
    if(ToggleButton[0][3]!==true)
    {
        fetch(ArtistsURL).then(response => response.json()).then(data => {

      

        CreateAlbumDiv.innerHTML=`
            <label>Album Name: </label>
            <input type="text" id="CreateAlbum_TextField_Name" placeholder="Type here son."/><br/>

            <label>Album Artist: </label>
            <select id="CreateAlbum_DropDown_Artist">
            ${data.map(artist => {
                return `
                    <option value ="${artist.id}">${artist.name}</option>
                  
                `;
            }).join('')}
            </select><br/>

            <label>Album Art: </label>
            <input type="text" id="CreateAlbum_TextField_Image" placeholder="Type here son."/><br/>

            <button id="CreateAlbum_Button_Submit">Create album</button>
        `;
        const CreateAlbumSubmitButton=document.getElementById("CreateAlbum_Button_Submit");
        CreateAlbumSubmitButton.addEventListener("click", CreateAlbum);
    });
    ToggleButton[0][1]=true;
    }
    else
    {
        CreateAlbumDiv.innerHTML=``;
        ToggleButton[0][3]=false;
    }
}
export function UpdateAlbumToggle(album)
{
    ToggleButton[1][3]=false;

    if (ToggleButton[1][3] !== true) {

        fetch(ArtistsURL).then(response => response.json()).then(data => {

        UDAlbumDiv.innerHTML = `
        <input type = "hidden" id="UpdateAlbum_Hidden_Id" value="${album.id}" />
        <label>Song Name: </label>
        <input type="text" id="UpdateAlbum_TextField_Name" value="${album.name}"/><br/>
    
        <label>Album Artist: </label>
        <select id="UpdateAlbum_DropDown_Artist">
     ${data.map(artist => {
            return `
            <option value ="${artist.id}">${artist.name}</option>
          
        `;
        }).join('')}
        </select><br/>
    
        <label>Album Art: </label>
        <input type="text" id="UpdateAlbum_TextField_Image" value="${album.image}"/><br/>
    
        <button id="UpdateAlbum_Button_Submit">Update album</button>
    `;
        const UpdateAlbumSubmitButton=document.getElementById("UpdateAlbum_Button_Submit");
        UpdateAlbumSubmitButton.addEventListener("click",UpdateAlbum);
        });
    }

    else
    {
        UDAlbumDiv.innerHTML=``;
        ToggleButton[1][3]=false;
    }
}
export function DeleteAlbumToggle(album)
{
    ToggleButton[2][3]=false;
    
    if (ToggleButton[2][3] !== true) {

        fetch(ArtistsURL).then(response => response.json()).then(data => {

        UDAlbumDiv.innerHTML = `
        <input type = "hidden" id="DeleteAlbum_Hidden_Id" value="${album.id}" />

        <button id="DeleteAlbum_Button_Submit">Delete album</button>
    `;
        const DeleteAlbumSubmitButton=document.getElementById("DeleteAlbum_Button_Submit");
        DeleteAlbumSubmitButton.addEventListener("click",DeleteAlbum);
        });
    }

    else
    {
        UDAlbumDiv.innerHTML=``;
        ToggleButton[2][3]=false;
    }
}


export function CreateReviewToggle()
{
    if(ToggleButton[0][3]!==true)
    {
        fetch(AlbumsURL).then(response => response.json()).then(data => {

      

        CreateReviewDiv.innerHTML=`
            <label>Review UserName: </label>
            <input type="text" id="CreateReview_TextField_UserName" placeholder="Type here son."/><br/>
            <label>Review Content: </label>
            <input type="text" id="CreateReview_TextField_Content" placeholder="Type here son."/><br/>
            <label>Review Rating: </label>
            <input type="text" id="CreateReview_TextField_Rating" placeholder="Type here son."/><br/>


            <label>Review Album: </label>
            <select id="CreateReview_DropDown_Album">
            ${data.map(album => {
                return `
                    <option value ="${album.id}">${album.name}</option>
                `;
            }).join('')}
            </select><br/>

            <button id="CreateReview_Button_Submit">Create Review</button>
        `;
        const CreateReviewSubmitButton=document.getElementById("CreateReview_Button_Submit");
        CreateReviewSubmitButton.addEventListener("click", CreateReview);
    });
    ToggleButton[0][1]=true;
    }
    else
    {
        CreateAlbumDiv.innerHTML=``;
        ToggleButton[0][3]=false;
    }
}
export function UpdateReviewToggle(review)
{
    ToggleButton[1][3]=false;

    if (ToggleButton[1][3] !== true) {

        fetch(AlbumsURL).then(response => response.json()).then(data => {

        UDReviewDiv.innerHTML = `
        <input type = "hidden" id="UpdateReview_Hidden_Id" value="${review.id}" />
        <label>Review Name: </label>
        <input type="text" id="UpdateReview_TextField_UserName" value="${review.userName}"/><br/>
        <label>Review Content: </label>
        <input type="text" id="UpdateReview_TextField_Content" value="${review.content}"/><br/>
        <label>Review Rating: </label>
        <input type="text" id="UpdateReview_TextField_Rating" value="${review.rating}"/><br/>
    
        <label>Review Album: </label>
        <select id="UpdateReview_DropDown_Album">
        ${data.map(album => {
            return `
            <option value ="${album.id}">${album.name}</option>
          
        `;
        }).join('')}
        </select><br/>
    
        <button id="UpdateReview_Button_Submit">Update review</button>
    `;
        const UpdateReviewSubmitButton=document.getElementById("UpdateReview_Button_Submit");
        UpdateReviewSubmitButton.addEventListener("click",UpdateReview);
        });
    }

    else
    {
        UDReviewDiv.innerHTML=``;
        ToggleButton[1][3]=false;
    }
}
export function DeleteReviewToggle(album)
{
    ToggleButton[2][3]=false;
    
    if (ToggleButton[2][3] !== true) {

        fetch(ArtistsURL).then(response => response.json()).then(data => {

        UDReviewDiv.innerHTML = `
        <input type = "hidden" id="DeleteReview_Hidden_Id" value="${album.id}" />

        <button id="DeleteReview_Button_Submit">Delete review</button>
    `;
        const DeleteReviewSubmitButton=document.getElementById("DeleteReview_Button_Submit");
        DeleteReviewSubmitButton.addEventListener("click",DeleteReview);
        });
    }

    else
    {
        UDReviewDiv.innerHTML=``;
        ToggleButton[2][3]=false;
    }
}

