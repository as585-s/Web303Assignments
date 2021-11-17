$(function () {// Remove modal content from page and store in $content
$(function () {
    $('.accordion').accordion(3000).show();


    // Remove modal content from page and store in $content
    var $content = $('#share-options').detach();

    var modal = new Modal();
    // Click handler calls open() method of modal object
    $('#share').on('click', function () {
        modal.open({
            content: $content,
            width: 340,
            height: 300
        });
    });
});