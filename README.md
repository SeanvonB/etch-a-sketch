# Etch-A-Sketch

<img src="example.png" alt="example of Etch-A-Sketch" width="100%" height="auto" />

[LIVE PREVIEW](https://seanvonb.github.io/etch-a-sketch/)

This web recreation of the classic [Etch-A-Sketch](https://en.wikipedia.org/wiki/Etch_A_Sketch) toy helped reinforce my understanding of DOM manipulation, dynamic styling, and responsive design. It should display and function equally well on desktop and mobile – please bully me about this if it doesn't.

## Features

-   Draw by moving your cursor or finger across the canvas
-   Adjust canvas pixel density with the size slider
-   Clear the canvas with the reset button

## Notes

Touch events don't have an equivalent to cursor events, like `mouseover` or `hover`, that continues to trigger on subsequent elements, so `touchDraw()` uses coordinates stored in `Event.touches` to locate elements beyond the initial touch target. This technique might be useful again someday.

## Credits

-   This project was recommended by [The Odin Project](https://www.theodinproject.com/).
-   "Etch-A-Sketch" is owned by Spin Master of Ontario, Canada.

## License

Copyright © 2021 Sean von Bayern  
Licensed under the [MIT License](LICENSE.md)
