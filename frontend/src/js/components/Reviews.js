export default function Reviews(reviews)
{
    return `
        <h1>Reviews list</h1>
        <ol>
            ${reviews.map(review => {
                return `
                    <li>${review.userName}</li>
                    <ul>
                        <li>Review Text: ${review.content}</li>
                        <li>Posted Date: ${review.postDate}</li>
                        `+/*<li>${review.editDate}</li>*/`
                        <li>Rating: ${review.rating}</li>
                        <li>Album: ${review.album.name}</li>
                    </ul>
                `;
            }).join('')}
        </ol>
    `;
}