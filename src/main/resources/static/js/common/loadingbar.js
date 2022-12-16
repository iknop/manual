function displayLoadingBar(status, id) {
    console.log(id +", " + status)
    if ( status ) {
        $('#'+id).css('display', 'block');
    } else {
        $('#'+id).css('display', 'none');
    }
}