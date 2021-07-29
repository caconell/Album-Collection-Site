export function Create(URL,RequestBody)
{
    return fetch(URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(RequestBody)}).then(response => response.json())

    /*
    fetch(ArtistsURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(RequestBody)
    }).then(response => response.json())
    .then(data => {
        DisplayDiv.innerHTML=Artist(data);
    });
    */
}
export function Update(URL,RequestBody)
{
    return fetch(URL,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(RequestBody)}).then(response => response.text())

    /*
    fetch(ArtistsURL + EditArtistId,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(RequestBody)
    }).then(response => response.text())
    .then(data => {
        fetch(ArtistsURL + EditArtistId)
        .then(response => response.json())
        .then(data => {
            DisplayDiv.innerHTML=Artist(data);
        });
    });
    */
}
export function Delete(URL,RequestBody)
{
    return fetch(URL,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(RequestBody)}).then(response => response.text())
    
    /*
    fetch(ArtistsURL + DeleteArtistId,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(RequestBody)
    }).then(response => response.text())
    .then(data => {
        fetch(ArtistsURL + DeleteArtistId)
        .then(response => response.json())
        .then(data => {
            DisplayDiv.innerHTML=`<p>Artist deleted.</p>`;
        });
    });
    */
}
export function Generic(URL)
{
    return fetch(URL).then(response => response.json());
}
export function GenericText(URL)
{
    return fetch(URL).then(response => response.text());
}