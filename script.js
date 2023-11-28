const body = document.querySelector('body')

body.insertAdjacentHTML('afterbegin', '<button class="start">Start</button>')
body.insertAdjacentHTML('afterbegin', '<button class="back">Ortga</button>')
const backBtn = document.querySelector('.back')
backBtn.style.display = 'none'

const startBtn = document.querySelector('.start')

startBtn.style.margin = '50px auto'
startBtn.style.display = 'block'
startBtn.style.fontSize = '30px'
startBtn.style.padding = '6px 15px'


startBtn.addEventListener('click', () => {

    let tanlanganElement
    console.log(tanlanganElement);

    startBtn.style.display = 'none'
    backBtn.style.display = 'block'

    body.insertAdjacentHTML('afterbegin', '<section></section>')
    const section = document.querySelector('section')


    section.insertAdjacentHTML('afterend', '<button class="reset">o\'chirish</button>')
    section.insertAdjacentHTML('afterend', '<button class="after">kegin qo\'yish</button>')
    section.insertAdjacentHTML('afterend', '<button class="before">oldin qo\'yish</button>')

    const beforeBtn = document.querySelector('.before')
    const afterBtn = document.querySelector('.after')
    const resetBtn = document.querySelector('.reset')


    for (let i = 0; i < 4; i++) {
        section.insertAdjacentHTML('beforeend', '<div></div>')
    }

    const div = [...document.querySelectorAll('div')]

    div.forEach(item => {
        // console.log('sasdasd');


        tanlash(item)
    })


    backBtn.addEventListener('click', () => {
        backBtn.style.display = 'none'
        startBtn.style.display = 'block'
        section.style.display = 'none'
        beforeBtn.style.display = 'none'
        afterBtn.style.display = 'none'
        resetBtn.style.display = 'none'


    })

    beforeBtn.addEventListener('click', function () {
        let newBox = document.createElement('div')
        newBox.style.background = randomColor()
        console.log(newBox);
        // console.log(tanlanganElement);
        if (tanlanganElement) {
            tanlanganElement.insertAdjacentElement('beforebegin', newBox)
        }
    })
    afterBtn.addEventListener('click', function () {
        let newBox = document.createElement('div')
        newBox.style.background = randomColor()
        console.log(newBox);
        // console.log(tanlanganElement);
        if (tanlanganElement) {
            tanlanganElement.insertAdjacentElement('afterend', newBox)
        }
    })

    resetBtn.addEventListener('click', function () {
        while (section.firstChild) {
            section.removeChild(section.firstChild)
        }


        for (let i = 0; i < 4; i++) {
            section.insertAdjacentHTML('beforeend', '<div></div>')
        }

        const div = [...document.querySelectorAll('div')]

        div.forEach(item => {
            // console.log('sasdasd');


            tanlash(item)
        })



    })

    function tanlash(box) {
        box.addEventListener('click', function () {
            const div = document.querySelectorAll('section div')
            for (let i = 0; i < div.length; i++) {
                div[i].style.border = '3px solid black'
            }
            box.style.border = '3px solid green'
            tanlanganElement = box
            // console.log(tanlanganElement);
        })

    }


    function randomColor() {

        
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        

    }

})



