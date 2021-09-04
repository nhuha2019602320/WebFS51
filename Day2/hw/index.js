// fetch('https://api.github.com/users/nhuha2019602320')
//     .then(res => res.json())
//    .then(data => console.log(data.followers))

// const apiPromise = new Promise((resolve, reject) => {
//     resolve()
// });
// apiPromise
// .then((valueCourse) => {
//     var  user = document.getElementById('btn').addEventListener('click', () => {
//         var valueName = document.getElementById('inp').value

//     fetch(`https://api.github.com/users/${valueName}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//     })
// })

// const btn = document.getElementById('btn')
// btn.addEventListener('click', () => {
//     const valueName = document.getElementById('inp').value
//     fetch(`https://api.github.com/users/${valueName}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => {
//         console.log("error")
//     })
// })


document.getElementById('btn').addEventListener('click', () => {
    const valueName = document.getElementById('inp').value
    fetch(`https://api.github.com/users/${valueName}`)
        .then(res => {
            if (!res.ok) {
                throw Error("err")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)

            // document.getElementById('Avatar').innerText = ` ${data.avatar_url}`
            // document.getElementById('Name').innerText = `Name: ${data.name}`
            // document.getElementById('Email').innerText = ` Email: ${data.email}`
            // document.getElementById('Company').innerText = `Company: ${data.company}`
            // document.getElementById('Flower').innerText = ` Flower: ${data.followers}`           
            var tag = document.getElementById('infor')
            tag.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${data.avatar_url}" class="card-img-top" id="Avatar">
                        <div class="card-body">
                            <h5 class="card-title" id="Name">Name: ${data.name}</h5>
                            <p class="card-title" id="Email">Email: ${data.email}</p>
                            <p class="card-text" id="Company">Company: ${data.company}</p>
                            <p class="card-text" id="Flower">Flower: ${data.followers}</p>
                        </div>
                    </div>
                    `;
        })
        .catch((error) => {
            alert('not find user')
            location.reload();
        })
})



