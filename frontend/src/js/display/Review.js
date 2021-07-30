export function DisplayReviewList(reviews)
{
    return `
        <h1>Reviews list</h1>

        <ol>
            ${reviews.map(review => {
                return `
                    <li class="review_page" id="${review.id}">${review.userName}</li>
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
export function DisplaySingleReview(review)
{
    return `

    <h1>Review Information</h1>

    <div><strong>UserName:</strong> ${review.userName}</div>
    <div><strong>Content:</strong> ${review.content}</div>
    <div><strong>Posted Date:</strong> ${review.postDate}</div>
    <div><strong>Edited Date:</strong> ${review.editDate}</div>
    <div><strong>Rating:</strong> ${review.rating}</div>

    <div><strong>Album:</strong> ${review.album.name}</div>

    <section class="ReviewForm">
        <button id="UpdateReviewButton">Edit Review</button>
        <button id="DeleteReviewButton">Delete Review</button>
    </section>

    <div id="UDReviewDiv"></div>
    `;
}