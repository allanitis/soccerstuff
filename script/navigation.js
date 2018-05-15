var links = [
  {
    name: '<strong>soccer</strong>stuff',
    href: '/'
  }, {
    name: 'Forwards',
    href: '/forwards/'
  }, {
    name: 'Midfielders',
    href: '/midfielders/'
  }, {
    name: 'Defenders',
    href: '/defenders/'
  }, {
    name: 'Goalkeepers',
    href: '/goalkeepers/'
  }, {
    name: '3D Printing',
    href: '/printing/'
  }
];

$(document).ready(function () {
  var targets = document.getElementsByClassName('_navigation');
  var i;
  var j;
  var string = '';
  for (i = 0; i < targets.length; i++) {
    for (j = 0; j < links.length; j++) {
      string = '<a href="' + links[j].href + '"><div class="w3-button">' + links[j].name + '</div></a>';
      $(targets[i]).append(string);
    }
  }
});
