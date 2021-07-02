/* Smooth scrolling */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/* JS count up animation */
function animateValue(obj, start = 0, end = null, duration = 3000) {
  if (obj) {
    var textStarting = obj.innerHTML;
    end = end || parseInt(textStarting.replace(/\D/g, ""));
    var range = end - start;
    var minTimer = 50;
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
      if (value == end) {
        clearInterval(timer);
      }
    }
    timer = setInterval(run, stepTime);
    run();
  }
}
const toAnimate = document.querySelectorAll('h1');
function checkElements() {
  toAnimate.forEach(function(e) {
    if (isVisible(e) && e.getAttribute('data-animated') != "true") {
      animateValue(e);
      e.setAttribute('data-animated', 'true');
    }
  })
}
document.addEventListener("scroll", checkElements);
checkElements();

function isVisible(el) {
  /* https://stackoverflow.com/a/7557433/14251221 */
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
