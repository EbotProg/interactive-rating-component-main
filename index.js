

const ratings = document.querySelectorAll('.rating');
const submitBtn = document.getElementById('submit_btn');
const ratingValue = document.getElementById('rating_value') ? document.getElementById('rating_value').innerText = localStorage.getItem('rating') || '' : undefined;

let value;
// console.log('ratings', ratings);


for (let rating of ratings) {

    rating.addEventListener('click', () => {
        console.log(rating.id)
        handleRatingClick(rating);
    })
}

function handleRatingClick(clickedRating) {


    for( let rating of ratings ) {
        if(rating.id == clickedRating.id) {
            // console.log('same', rating.id)\
            clickedRating.classList.add('clicked')
            value = clickedRating.innerText;
            
        }else {
            // console.log('diff', rating.id)
            rating.classList.remove('clicked')
        }
    }
    // const unclickedRatings = [...ratings].find((rating)=> rating.id !== clickedRating.id);
    // [...unclickedRatings].forEach((item)=> item.classList.remove('clicked'))
    // console.log('value', value)
}

const handleSubmit = () => {
    // e.preventDefault();
    console.log(
        'value', value
    )
    localStorage.setItem('rating', value);
    window.location.replace('/thank_you.html')
    
    
}

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(
//         'value', value
//     )
//     window.location.replace('/thank_you.html')

//     ratingValue.innerText = value
// })