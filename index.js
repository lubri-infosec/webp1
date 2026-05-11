document.addEventListener('DOMContentLoaded', function() {
  const ibb = document.getElementById('ibb');
  const wt1 = document.getElementById('wt1');
  const wt2 = document.getElementById('wt2');
  const sd = document.getElementById('sd');
  const grid = document.getElementById('grid');
  // кнопки
  const b2 = document.getElementById('b2');
  const b3 = document.getElementById('b3');
  const b4 = document.getElementById('b4');
  const b5 = document.getElementById('b5');
  // sections
  const b2s = document.getElementById('b2s');
  const b3s = document.getElementById('b3s');
  const b4s = document.getElementById('b4s');
  const b5s = document.getElementById('b5s');

  document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    const opacityTop = (scrollPosition > 50) ? 0 : 1;
    [wt1, wt2, sd].forEach(el => { if (el) el.style.opacity = opacityTop; });

    if (ibb) ibb.style.opacity = (scrollPosition > 50) ? 0.8 : 0;
    if (b2s) b2s.style.opacity = (scrollPosition > 500 && scrollPosition < 1300) ? 1 : 0;
    if (b3s) b3s.style.opacity = (scrollPosition > 1100 && scrollPosition < 1800) ? 1 : 0;
    if (b4s) b4s.style.opacity = (scrollPosition > 1600 && scrollPosition < 2500) ? 1 : 0;
    if (b5s) b5s.style.opacity = (scrollPosition > 2100) ? 1 : 0;
  });

  if (sd && grid) {
    sd.addEventListener('click', function(e) {
      e.preventDefault();
      grid.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const buttons = [
    { btn: b2, target: b2s },
    { btn: b3, target: b3s },
    { btn: b4, target: b4s },
    { btn: b5, target: b5s }
  ];

  buttons.forEach(item => {
    if (item.btn && item.target) {
      item.btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        item.target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      });
    }
  });
});