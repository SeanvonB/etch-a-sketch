# Etch-A-Sketch

This web recreation of the classic [Etch-A-Sketch](https://en.wikipedia.org/wiki/Etch_A_Sketch) toy helped reinforce my understanding of DOM manipulation, dynamic styling, and responsive design. It should display and function equally well on mobile and desktop, and I intend to do further tinkering to support that claim.

This toy works by moving your cursor across the canvas, which will continuously draw based on your position. You can also clear the canvas with the reset button or adjust the canvas density with the size slider.

Unfortunately, touch controls aren't as faithful to the continuous drawing of the original toy, because touch events don't have an equivalent to the `mouseover` or `hover` events. For instance, `touchmove` doesn't continuously trigger on subsequent elements. Until I can implement an equivalent, touch controls will be limited to tapping.
