Image-slider
============

A very simple, small, JavaScript image slider that relies on no 3rd party libraries.

See index.html for example usage or below for basic API.


<h2>Available Properties:</h2>
<br/>
<b>holder:</b> (string)<br/>
DOM element id that will hold the slider, typically a div<br/>

<b>width:</b> (int)<br/>
width of the holder<br/>

<b>height:</b> (int)<br/>
height of the holder<br/>

<b>speed:</b> (int)<br/>
time in ms to do one transition<br/>

<b>items:</b> []<br/>
array of {src: "", alt: ""}<br/>

<h2>Basic API:</h2>
<b>slider.create(props)</b>:<br/>
Create a slider with provided properties.<br/>
 
<b>slider.next()</b>:<br/>
Next image<br/>

<b>slider.previous()</b>:<br/>
Previous image<br/>

<b>slider.goto(int)</b>:<br/>
Goto an image, 1st image is 1<br/>

<b>slider.refresh()</b>:<br/>
Refresh the slider with current properties.<br/>

<b>slider.set(prop, value)</b>:<br/>
set a property, after all set, call refresh.<br/>

<b>slider.get(prop)</b>:<br/>
get a property value<br/>


<h2>Disclaimer:</h2>
I own none of the images.
