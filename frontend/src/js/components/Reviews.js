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

        <section class="ReviewForm">
            <label>Review Name: </label>
            <input type="text" id="AddReview_Name_TextField" placeholder="Type here son."/><br/>
            <button id="AddReviewButton">Create a review</button>
        </section>
    `;
}