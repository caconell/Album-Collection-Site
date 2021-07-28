export default function Review(review)
{
    return `

    <h1>Artist Information</h1>

    <div><strong>UserName Name:</strong> ${review.userName}</div>
    <div><strong>Content:</strong> ${review.content}</div>
    <div><strong>Posted Date:</strong> ${review.postDate}</div>
    <div><strong>Edited Date:</strong> ${review.editDate}</div>
    <div><strong>Rating:</strong> ${review.rating}</div>

    <div><strong>Album:</strong> ${review.album.name}</div>

    <section class="ReviewForm">
        <button id="EditReviewButton">Edit Review</button>
        <button id="DeleteReviewButton">Delete Review</button>
    </section>
    `;
}