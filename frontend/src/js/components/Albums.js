export default function Albums(albums)
{
    return `
        <h1>Albums list</h1>
        <ol>
            ${albums.map(album => {
                return `
                    <li>${album.name}</li>
                `;
            }).join('')}
        </ol>

        <section class="AlbumForm">
            <label>Album Name: </label>
            <input type="text" id="AddAlbum_Name_TextField" placeholder="Type here son."/><br/>
            <button id="AddAlbumButton">Create an album</button>
        </section>
    `;
}