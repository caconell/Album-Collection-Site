//alert('[\x00\u0000]')
let color=[];
color[0]="#DFDFDF";
color[1]="#FFDFDF";
color[2]="#DFFFDF";
color[3]="#DFDFFF";
color[4]="#FFFFDF";
color[5]="#FFDFFF";
color[6]="#DFFFFF";
color[7]="#FFFFFF";
let ColorNumber=0;
let PreviousNumber=0;
function x()
{
    //document.body.style.backgroundColor=color[]; //new Random()
    while(PreviousNumber==ColorNumber)
        ColorNumber=Math.floor((Math.random()*6)+1);
    document.body.style.cssText='background-color:'+color[ColorNumber]+';';
    PreviousNumber=ColorNumber;
}
setInterval(x,5000);
x();

//HomeNavButton.addEventListener("click",x);
//ArtistNavButton.addEventListener("click",x);
//SongNavButton.addEventListener("click",x);
//ReviewNavButton.addEventListener("click",x);
//AlbumNavButton.addEventListener("click",x);


function TrailingZeroes(Number,Digits)
{
    let StringToReturn="";
    let ValueToCheck=1;
    StringToReturn+=Number;
    for(let i=1;i<Digits;i++)
    {
        ValueToCheck*=10;
        ValueToCheck=Math.floor(ValueToCheck);
        if(Number<ValueToCheck)StringToReturn="0"+StringToReturn;
    }
    return StringToReturn;
}