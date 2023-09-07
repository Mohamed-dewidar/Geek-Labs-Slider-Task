

const data = [
    {
    name: 'Dark knight',
    details: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    src: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dbb1e872bf0d75f217734269348b239b8ece37c771e5c072de7a40b81eb103c6._RI_TTW_.jpg"
},
{
    name: 'Interstellar',
    details: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    src: "https://m.media-amazon.com/images/I/51YBVXb-iDL._SX300_SY300_QL70_FMwebp_.jpg"
},
{
    name: 'Forgotten',
    details: 'When his abducted brother returns seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the kidnapping.',
    src: "https://www.heavenofhorror.com/wp-content/uploads/2018/02/Forgotten-review-netflix-2017-2-1000x640.jpg"
},
{
    name: 'Parasite',
    details: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    src: "https://musicart.xboxlive.com/7/6e3a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
},
]

// DOM elements reference
let slider; // reference to the image slider
let title; // reference to project title
let details; // reference to project details
let prevBtn; //  reference to prev button icon
let nextBtn; //  reference to next button icon



addEventListener('load', scriptBegins)

function scriptBegins(){
    slider = document.querySelector('[data-slider]')
    title = document.querySelector('[data-title]')
    details = document.querySelector('[data-details]')
    prevBtn = document.querySelector('[data-prevbtn]')
    nextBtn = document.querySelector('[data-nextbtn]')

    loadData()

    prevBtn.addEventListener('click', handlePrevClick)
    nextBtn.addEventListener('click', handleNextClick)

    // console.log(slider)
}

/**
 * 
 * This function will
 * - create the image slider using data array
 * - create the main selected project
 */
function loadData(){
    
    slider.textContent = ''


    for(const ele of data){
        const imgContainer = document.createElement('div')
        imgContainer.className = 'img-container'
        imgContainer.style.backgroundImage = `url(${ele.src})`
        slider.append(imgContainer)
    }

    let sliderChildren = slider.children
    if(sliderChildren.length === 0){
        return
    }

    
    
    if(sliderChildren.length === 1){
        sliderChildren[0].className = sliderChildren[1].className + ' main-img'
        title.textContent = data[0].name
        details.textContent = data[0].details
        return
    }
    sliderChildren[1].className = sliderChildren[1].className + ' main-img'
    title.textContent = data[1].name
    details.textContent = data[1].details
}


function handlePrevClick(){
    data.push(data.shift())
    loadData()
}

function handleNextClick(){
    data.unshift(data.pop())
    loadData()
}