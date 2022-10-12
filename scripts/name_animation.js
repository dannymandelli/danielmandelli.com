const spans = document.querySelectorAll('.animated_word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
    ripple_left(spans, idx-1, 0);
    ripple_right(spans, idx+1, 0);
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  setTimeout(() => {
    span.classList.add('active');
  }, 100 * (idx+1));

});

function ripple_left(spans, idx, count) {
  if(idx >= 0){
    spans.item(idx).classList.add('active');
    setTimeout(() => {
      ripple_left(spans, idx-1, count+1);
    }, 35 * (count+1))
  }
}

function ripple_right(spans, idx, count) {
  if(idx <= spans.length){
    spans.item(idx).classList.add('active');
    setTimeout(() => {
      ripple_right(spans, idx+1, count+1);
    }, 35 * (count+1))
  }
}

