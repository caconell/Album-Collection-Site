export default function Artists(artists)
{
    return `
        <h1>Artists list</h1>
        <ol>
            ${artists.map(artist => {
                return `
                    <li>${artist.name}</li>
                `;
            }).join('')}
        </ol>

        <section class="ArtistForm">
            <label>Artist Name: </label>
            <input type="text" id="AddArtist_Name_TextField" placeholder="Type here son."/><br/>
            `+/*
            <label>Artist Bio: </label>
            <input type="text" id="AddArtist_Bio_TextField" placeholder="Type here son."/><br/>

            <label>Artist Age: </label>
            <input type="text" id="AddArtist_Age_TextField" placeholder="Type here son."/><br/>

            <label>Artist Hometown: </label>
            <input type="text" id="AddArtist_Hometown_TextField" placeholder="Type here son."/><br/>

            <label>Artist Record Label: </label>
            <input type="text" id="AddArtist_RecordLabel_TextField" placeholder="Type here son."/><br/>
            */`
            <button id="AddArtistButton">Create an artist</button>
        </section>
    `;
}