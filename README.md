Connect.Tech Programmable Badges
================================

[Connect.Tech Conference](http://connect.tech/)

The badges are [Espruino Pixl.js](http://www.espruino.com/Pixl.js) boards,
and come preprogrammed to do nothing more than
display your name and a slowly moving cityscape.

However they feature a [pretty full](http://www.espruino.com/Features)
JavaScript interpreter that can run whatever JS you want, and can even
interact with other Bluetooth devices.


Hacking / Writing your own Code
-------------------------------

Simply power off your badge by removing the battery and 
power it back on with a button on the right-hand side held down. 
This will make it connectable so you can program it (until it 
is restarted again).

Then just follow [the normal Pixl.js instructions](http://www.espruino.com/Quick+Start+BLE#pixljs)
to get connected and start writing code. There are
[a bunch of tutorials](http://www.espruino.com/Pixl.js#tutorials)

Once connected, type `reset()` - this'll remove any of the badge
code from RAM so you can play with a 'fresh' badge, without the old
code getting in the way.

If you want your old code back, just type `load()` and the old
badge contents will return. The same happens if you power cycle.

**Don't type `save()` or use the `save on send` option in the IDE 
unless you want to remove badge code. If you blow it away you can 
always follow the instructions in the next heading.

[The standard badge code is here](https://github.com/espruino/connect-tech-badge-source/blob/master/badge.js)


Change Name / Back to Standard
------------------------------

[Click this link](https://www.espruino.com/ide/?codeurl=https://raw.githubusercontent.com/espruino/connect-tech-badge-source/master/badge.js)
on a Web Bluetooth capable device (Android, Mac OS, or Windows 10 with [Chrome Canary](https://www.google.com/chrome/canary/)).

Then follow the instructions you see on the right-hand side of the page.

