/* HOW TO USE:

 * Enter your name below in 2 lines, where it says `NAME = `
 * If you have a battery in the Pixl, remove it
 * Add the battery while holding down Pixl's top left button
 * Wait for the bootloader bar to go to the end, and hold down
    even when told to release.
 * Only release when the test fails and it says 'Erasing Saved Code'
 * You now have a 100% blank Pixl.js
 * Click the connect icon in the top left of the IDE
 * Choose the 'Web Bluetooth' option
 * Choose 'Pixl.js xxyy` where xx:yy are the last digits of the code 
    on your Pixl's screen
 * If you have trouble, check out http://www.espruino.com/Quick+Start+BLE#pixljs
 * Once connected, click the 'Send to Espruino' button (middle of the IDE, third down)
 * After a few seconds, the badge is updated
*/

// Enter your name below!
var NAME = [
 "Laura",
 "Moore"
];
/* NOTE: Unfortunately the font used here only supports basic
  ASCII (eg, not char codes >128). For more userful international
  characters, you can swap to FontDennis8 (http://www.espruino.com/Fonts#font-modules) */
require("Font8x16").add(Graphics);

// Images generated with http://www.espruino.com/Image+Converter
var cityscape = { // img/cityscape.png
  width : 128, height : 16, bpp : 1,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAgAAAAAAAAAAAAAAAAAgAAIAAAAAAAAAAAAACAAAIAACAAAAQAAAAAAPwAgAAHAABwAAAEAAAAAAD8AIAABwAA+AAADAAAAAAA/ACAAAcAAPgAAAwAAAAHAPwAgAAHAAD4ABAMAAAABwj8AcADxwAA+AA4DAAAAAcc/AHAA8c+APngfAwB4AAHPv/D4APHPgD54P4N+eAYHz7/w+ADxz4A/+D+Dfngfh8+/8f3w8c+Pv/g/g354f+fPv/H9//HPj7/+P/N+eP/3z7/x///xz4+/////////////////////w=="))
};
var ctlogo = { // img/connect-tech.png
  width : 31, height : 15, bpp : 1,
  buffer : E.toArrayBuffer(atob("B+AP/jAwAACPAD/6YYAFBQAAChIAABQoAAAoUAAAUKAAAKEgAAFBQAACgmGABQI8AAoDAxgUAfgwKAA="))
};

var rex =  [
    // running
     { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAAIAADAP//")) },
     { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYwAEAABgAP//")) },
     // dead
     { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gAj8AK/ACPwA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAEIABjAP//")) }
   ];

// Draw the cityscape
var n = 0;
function draw() {
  n++;
  if (n>127) n=0;
  g.clear();
  g.drawImage(rex[0], n,24);
  g.drawImage(rex[1], n-128,24);  
  g.drawImage(cityscape, n,48);
  g.drawImage(cityscape, n-128,48);
  g.drawImage(ctlogo, 96,0);
  g.setFont8x16();
  g.setFontAlign(0,0);
  NAME.forEach(function (n,i) {
   g.drawString(n,48,22 + 15*i);
  });
  g.flip();
}

// Called at startup
function onInit() {
  // Update once a second
  setInterval(draw,1000);
  // When starting, don't advertise (eg don't be connectable) unless 
  // a button is pressed or we are connected to Bluetooth
  if (process.env.CONSOLE!="Bluetooth" &&
      !(BTN1.read()|| BTN2.read()||BTN3.read()||BTN4.read())) 
    NRF.sleep(); 
}

/* Note: If you turned on 'Save on Send' in the IDE then
you can delete everything below this comment. We added this
just to make everything easy to upload with no config needed. */
require("Storage").eraseAll();
setTimeout(save, 4000);
print("Now just wait 4 seconds. Code will be saved to flash.");
