$(document).ready(function(){
    $('.accordion').each(function(){
        const $this = $(this);
        const $control = $this.find('li.active');
        const $link = $control.find('a');
        const $panel = $($link.attr('href'));
        

        $this.on('click', '.accordion-control', function(e){
            e.preventDefault();
            const $link = $(this);
            const id = $(this.hash);
            $(id).next('.accordion-panel').slideDown();
           
            
            if (id && !$link.is('.active')){
                $(id).next('.accordion-panel').hide();
                $panel.removeClass('active');
                $control.removeClass('active');
               
                $(id).addClass('active');
                $link.parent().addClass('active');
                
               
            }
        })
    })
})


$(function () {
    $('.tab-list').each(function () {
  
        // Find lists of tabs
        var $this = $(this);                        // Store this list
        var $tab = $this.find('li.active');         // Get the active li
        var $link = $tab.find('a');                 // Get its link
        var $panel = $($link.attr('href'));
       
        $this.on('click', '.tab-control', function (e) { // Click tab
            e.preventDefault();                     // Prevent link
            var $link = $(this);                    // Store current link
            var id = $(this.hash);                     // Get clicked tab
            $(id).next('.tab-panel').slideDown();

            if (id && !$link.is('.active')) {
                $(id).next('.tab-panel').hide();
                                                   // If not active
                $panel.removeClass('active');       // Make panel and
                $tab.removeClass('active');         // tab inactive
                $panel = $(id).addClass('active');  // Make new panel and
                $tab = $link.parent().addClass('active'); // tab active.
              }
        });
    });
});