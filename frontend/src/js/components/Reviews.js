export default function Reviews(reviews)
{
    return `
        <h1>Reviews list</h1>
        <ol>
            ${reviews.map(review => {
                return `
                    <li>${reviews.name}</li>
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