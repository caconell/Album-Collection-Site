import {ToggleButton} from "./var/toggle";

import {CreateArtist,UpdateArtist,DeleteArtist} from "./crud";
import {CreateSong,UpdateSong,DeleteSong} from "./crud";

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
    /*
    if(ToggleAddArtistButtonBoolean!==true)
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
    */
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
    
    /*
    if(ToggleEditArtistButton!==true)
    {
        UDArtistDiv.innerHTML=`

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
        UDArtistDiv.innerHTML=``;
        ToggleEditArtistButtonBoolean=false;
    }
    */
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
    
    /*
    if(ToggleDeleteArtistButtonBoolean!==true)
    {
        UDArtistDiv.innerHTML=`
            <input type="hidden" id="DeleteArtist_Hidden_Id" value="${artist.id}"/><br/>
            <button id="SubmitDeleteArtist">Confirm the deletion of its existance</button>
        `;
        ToggleDeleteArtistButtonBoolean=true;

        const SubmitDeleteArtist=document.getElementById("SubmitDeleteArtist");
        SubmitDeleteArtist.addEventListener("click",DeleteArtist);
    }
    else
    {
        UDArtistDiv.innerHTML=``;
        ToggleDeleteArtistButtonBoolean=false;
    }
    */
}



export function CreateSongToggle()
{
    if(ToggleButton[0][1]!==true)
    {
        CreateSongDiv.innerHTML=`
            <label>Song Name: </label>
            <input type="text" id="CreateSong_TextField_Name" placeholder="Type here son."/><br/>

            <label>Song Album: </label>
            <select>
                <option>Each album name goes here</option>
                <option>Each album name goes here</option>
                <option>Each album name goes here</option>
            </select><br/>

            <label>Song Duration: </label>
            <input type="text" id="CreateSong_TextField_Duration" placeholder="Type here son."/><br/>

            <label>Song Link: </label>
            <input type="text" id="CreateSong_TextField_Link" placeholder="Type here son."/><br/>

            <button id="CreateSong_Button_Submit">Create song</button>
        `;
        ToggleButton[0][1]=true;
    }
    else
    {
        CreateSongDiv.innerHTML=``;
        ToggleButton[0][1]=false;
    }

    /*
    ToggleButton[0][1]=Refactored(ToggleButton[0][1],CreateSongDiv,[
        //Element type, include label, crud operation, thing it's for, Attribute / action, extra tag text, extra tag attribute name.
        [1,true,"Create","Song","Name","Type here son.","placeholder"],
        //[4,true,"Create","Song","Album",song.album.name,"value"],
        [1,true,"Create","Song","Duration","Type here son.","placeholder"],
        [1,true,"Create","Song","Link","Type here son.","placeholder"],
        [2,false,"Create","Song","Submit","Create song"]
    ]);
    */

    if(ToggleButton[0][1]===true)
    {
        const CreateSongSubmitButton=document.getElementById("CreateSong_Button_Submit");
        CreateSongSubmitButton.addEventListener("click",CreateSong);
    }
}
export function UpdateSongToggle(song)
{
    ToggleButton[2][1]=false;
    ToggleButton[1][1]=Refactored(ToggleButton[1][1],UDSongDiv,[
        //Element type, include label, crud operation, thing it's for, Attribute / action, extra tag text, extra tag attribute name.
        [3,false,"Update","Song","Id",song.id,"value"],
        [1,true,"Update","Song","Name",song.name,"value"],
        [1,true,"Update","Song","Album",song.album.name,"value"],
        [1,true,"Update","Song","Artist",song.album.artist.name,"value"],
        [1,true,"Update","Song","Duration",Math.floor( (song.duration/3600) )+":"+TrailingZeroes(Math.floor( ((song.duration/60)%60) ),2)+":"+TrailingZeroes(Math.floor( ((song.duration/1)%60) ),2),"value"],
        [1,true,"Update","Song","Link",song.link,"value"],
        [2,false,"Update","Song","Submit","Update song"]
    ]);

    if(ToggleButton[1][1]===true)
    {
        const UpdateSongSubmitButton=document.getElementById("UpdateSong_Button_Submit");
        UpdateSongSubmitButton.addEventListener("click",UpdateSong);
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



export function CreateReviewToggle()
{
    
}
export function UpdateReviewToggle(review)
{
    
}
export function DeleteReviewToggle(review)
{
    
}



export function CreateAlbumToggle()
{
    
}
export function UpdateAlbumToggle(album)
{
    
}
export function DeleteAlbumToggle(album)
{
    
}