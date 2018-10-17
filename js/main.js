console.log('hello')

// Iteration 1. Hide all the divs with data-page except the right one
function goToPage(link) {
        $('[data-page]').hide();
        $('[data-page='+link+']').show();
}

// Go to page
goToPage('home')

$('a').click(function(event){
    event.preventDefault()
    var href = $(this).attr('href')
    goToPage(href)
})

// Add the class active in the navbar
$('li.nav-item').each(function(link){
    var href = $(this).find('a.nav-link').attr('href')
    if (href === link){
        $(this).addClass('active')
    } else {
        $(this).removeClass('active')
    }
    
})
