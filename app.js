const data = [
    {
        name: 'John Cornor',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Florida, FL',
        image: 'https://randomuser.me/api/portraits/men/43.jpg'
    },
    {
        name: 'Julia Johnson',
        age: 30,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
        name: 'Shurthi Vikram',
        age: 29,
        gender: 'female',
        lookingfor: 'male',
        location: 'Ottawa, CA',
        image: 'https://randomuser.me/api/portraits/women/43.jpg'
    }
]

const profileNames = profileIterator(data);

// Call first profile

nextProfileNames();

// Next Event
document.getElementById('next').addEventListener("click", nextProfileNames)

// Next profile names display
function nextProfileNames(){
    currentProfileName = profileNames.next().value;

    if(currentProfileName !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${currentProfileName.name}</li>
                <li class="list-group-item">Age: ${currentProfileName.age}</li>
                <li class="list-group-item">Location: ${currentProfileName.location}</li>
                <li class="list-group-item">Preference: ${currentProfileName.gender} looking for ${currentProfileName.lookingfor}</li>
            </ul>
        `
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfileName.image}" title="${currentProfileName.name}" class="border border-info">
    `} else{
        window.location.reload();
    }
}

function profileIterator(names){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < names.length ? {value: names[nextIndex++], done: false}  : { done: true}
        }
        
    }
}

