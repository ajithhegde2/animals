const list = document.querySelector('.row')

function updateList() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((element) => {
                const card = document.createElement('div')
                card.classList.add(
                    'card',
                    'col-lg-3',
                    'col-md-4',
                    'col-sm-6',
                    'p-0',
                    'm-3'
                )

                const cardBody = document.createElement('div')
                cardBody.classList.add('card-body')

                list.appendChild(card)
                const image = document.createElement('img')
                image.classList.add('rounded')
                image.src = element.image_link

                const title = document.createElement('h5')
                title.classList.add('card-title')
                title.innerHTML = element.name

                card.appendChild(image)
                card.appendChild(cardBody)
                cardBody.appendChild(title)
            })
        })
        .catch((error) => {
            console.log(error)
            const heading = document.querySelector('.heading')
            heading.innerHTML = 'OOPS ! Something Went Wrong'
        })
}

updateList()