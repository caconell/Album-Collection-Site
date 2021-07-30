export function DisplayAlbumList(albums)
{
    return `
        <h1>Albums list</h1>
        <ol>
            ${albums.map(album => {
                return `
                    <li class="album_page" id ="${album.id}">${album.name}</li>
                  
                `;
            }).join('')}
        </ol>

        <section class="AlbumForm">
            `+/*<label>Album Name: </label>
            <input type="text" id="AddAlbum_Name_TextField" placeholder="Type here son."/><br/>*/`
            <button id="CreateAlbumButton">Create an album</button>
            <div id="CreateAlbumDiv"></div>
        </section>
    `;
}
export function DisplaySingleAlbum(album)
{
    return `

    <h1>Album Information</h1>

    <div><strong>Album Name:</strong> ${album.name}</div>
    <div><strong>Artist:</strong> ${album.artist.name}</div>
    
    <div><strong>Songs: </strong>
    
    <ul>${album.songs.map(song => {
        return `
            <li class="song_page" id="${song.id}">
            ${song.name}</li>
        
        `;
    }).join('')}
    </ul></div>

    <div><strong>Reviews: </strong>
    
    <ul>${album.reviews.map(review => {
        return `
            <li class="review_page" id="${review.id}">${review.userName}</li>
            <li>${review.content}</li>
            <li>${review.postDate}</li>
            <li>${review.editDate}</li>
            <li>${review.rating}</li>
            <br/>
        `;
    }).join('')}
    </ul></div>

    <section class="AlbumForm">
        <button id="UpdateAlbumButton">Edit album</button>
        <button id="DeleteAlbumButton">Delete album</button><br/>
        <button id="CreateReviewButton">Create a review</button>
        <div id="CreateReviewDiv"></div>
    </section>

    <div id="UDAlbumDiv"></div>
    `;
}