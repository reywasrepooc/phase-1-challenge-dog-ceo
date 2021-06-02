console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl ='https://dog.ceo/api/breeds/list/all' 
document.addEventListener('DOMContentLoaded', () => {
fetch(imgUrl)
.then(resp => resp.json())
.then(json => json.message.forEach(image => {
    const dogImage = document.createElement('img')
    const dogImageCont = document.querySelector('#dog-image-container')
    dogImage.src = image
    dogImageCont.appendChild(dogImage)
}))
const dogBreedList = document.querySelector('#dog-breeds')
fetch(breedUrl) 
.then(resp => resp.json())
.then(json => Object.keys(json.message).forEach(breeds => {
    const dogBreed = document.createElement('li')
    
    dogBreed.innerHTML = breeds
    dogBreedList.appendChild(dogBreed)
    dogBreed.addEventListener('click', () => {
        dogBreed.style.color = '#6b5103'
    }
    )

}))
const select = document.querySelector('#breed-dropdown')
select.addEventListener('change', () => {
    const arrayOfDogBreeds = [...dogBreedList.children] 
    arrayOfDogBreeds.map( (eachElement) => {
       if(eachElement.innerHTML.charAt(0) === select.value) {
           eachElement.hidden = false
       } else {
           eachElement.hidden = true
       }
    })
})
})
