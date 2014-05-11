'use strict';

app.directive('draggie', function($document){
  function link(scope, el, attr) {
    var startX = 0;
    var startY = 0;
    var x = 0; 
    var y = 0;

    el.css({
      position: 'relative',
      cursor: 'pointer'
    });

    el.on('mousedown', function(e){
      e.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove() {
      y = event.pageY - startY;
      x = event.pageX - startX;
      el.css({ top: y + 'px', left: x + 'px' });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    } 

  }

  return {
    restrict : 'A',
    link : link
  };
});