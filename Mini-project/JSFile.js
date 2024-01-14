
let menu = document.querySelector('.menu');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for ( const user of users){
            let li = document.createElement('li');
        li.innerText = user.name;
        menu.append(li);
    }
});