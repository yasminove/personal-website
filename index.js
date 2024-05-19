function changeBorderRadius(value) {
    document.documentElement.style.setProperty('--image', `var(--${value})`)
}



const movies = document.getElementById('movies')

movies.addEventListener('change', function () {
    const value = this.value;
    document.documentElement.style.setProperty('--font', `var(--${value})`)
})


const fruits = document.getElementById('fruits');

fruits.addEventListener('change', function () {
    const value = this.value;
    switch (value) {
        case 'watermelon':
           document.documentElement.style.setProperty('--background', '#75b855') 
           document.documentElement.style.setProperty('--text', '#ad3838') 
            break;
        case 'tomato':
            document.documentElement.style.setProperty('--background', '#d62e2e') 
            document.documentElement.style.setProperty('--text', '#600000') // #d62e2e
            break;
        case 'banana':
            document.documentElement.style.setProperty('--background', '#fbec5d') 
            document.documentElement.style.setProperty('--text', '#6b3e26') 
            break;
        case 'orange':
            document.documentElement.style.setProperty('--background', '#ffca16') 
            document.documentElement.style.setProperty('--text', '#f97300') 
            break;
        case 'avocado':
            document.documentElement.style.setProperty('--background', '#6b8c21') 
            document.documentElement.style.setProperty('--text', '#704012') 
            break;
        case 'blueberry':
            document.documentElement.style.setProperty('--background', '#41a8f9') 
            document.documentElement.style.setProperty('--text', '#064490') 
            break;
    
        default:
            document.documentElement.style.setProperty('--background', '#f5f5f5') 
            document.documentElement.style.setProperty('--text', '#222') 
            break;
    }
})

