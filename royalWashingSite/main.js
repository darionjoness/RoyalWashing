const barsBtn = document.querySelector('.barsBtn')
const xBtn = document.querySelector('.xBtn')
const moblieServicesBtn = document.getElementById('mobileServicesBtn')
const mobileHomeBtn = document.getElementById('mobileHomeBtn')
const mobileContactBtn = document.getElementById('mobileContactBtn')

// Add event listener to 3 bars btn
barsBtn.addEventListener('click', moveMobileNav)
// Add event listener to mobileNav xBtn
xBtn.addEventListener('click', removeMobileNav);
// Add event listener to services mobile nav link
moblieServicesBtn.addEventListener('click', moveToServices)
// Add event Listener to home mobile nav link
mobileHomeBtn.addEventListener('click', moveToHome)
// Add event listener to contact mobile nav link
mobileContactBtn.addEventListener('click', moveToContact)


// Create moveMobileNav function
function moveMobileNav(){
    // Add class of visible to the mobileNav div
    document.querySelector('.mobileNav').classList.add('visible')
}

// Create removeMobileNav function
function removeMobileNav(){
    //  Remove class of visible from mobileNav div
    document.querySelector('.mobileNav').classList.remove('visible')
}

// Create moveToServices function
function moveToServices(){
    // Scroll into the view of the section with services id
    document.getElementById("services").scrollIntoView();
    // Run removeMobileNav class
    removeMobileNav()
}

// Create moveToHome function
function moveToHome(){
     // Scroll into the view of the section with home id
     document.getElementById("home").scrollIntoView();
     // Run removeMobileNav class
     removeMobileNav()
}

// Create moveToHome function
function moveToContact(){
    // Scroll into the view of the section with home id
    document.getElementById("contact").scrollIntoView();
    // Run removeMobileNav class
    removeMobileNav()
}




