function getPages() {
  var value = encodeURIComponent($('#value').val());

  if(value == ""){
    alert('If you can\'t thing of something click on "I\'m feeling lucky"');
  }

  var apiUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts|info&exintro&exlimit=max&inprop=url&generator=search&format=json&formatversion=2&callback=?&gsrsearch=" + value;
  $.getJSON(apiUrl, function(json) {

    var pages = json.query.pages;
    var output = '';

    pages.forEach(function(page){

      output += '\
<a href="'+ page.fullurl +'" target="_blank">\
  <div class="row">\
    <h3>'+ page.title +'</h3>\
    '+ page.extract.substring(3).split('.')[0] + '.</p>\
  </div>\
</a>';

    });

    $("img").animate({width: '25%'});
    $("#search").animate({'margin-top': '-11%'});
    $('#results').html(output);
  });
}

$(document).keyup(function(event){
  if(event.keyCode == 13){
    $("#input").click();
  }
});

$(document).ready(function() {
  // $(".container").animate({top: '40%'});
});