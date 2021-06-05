//Data is an array of objects which contains information about the candidates

const data =[
    {
        name: 'Amit Kumar',
        age: 26,
        city: 'Agra',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Krishna',
        age: 22,
        city: 'Hathras',
        language: 'React',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Satty',
        age: 28,
        city: 'Noida',
        language: 'Mern',
        framework: 'JavaScript',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Lala',
        age: 24,
        city: 'Banaras',
        language: 'HTML',
        framework: 'CSS',
        image: 'https://randomuser.me/api/portraits/men/50.jpg'
    }
]

//CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex <profiles.length ? {value : profiles[nextIndex++],done: false}: {done: true}
        }
    }
}

//Button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
const candidates= cvIterator(data);

function nextCV(){
    const currentCandidate= candidates.next().value;

    let image =document.getElementById("image");
    let profile =document.getElementById("profile");
    image.innerHTML= `<img src="${currentCandidate.image}" />`
    profile.innerHTML= `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
    </ul>`
}