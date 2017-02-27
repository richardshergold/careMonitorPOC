# careMonitorPOC

Before looking at the code please view this video for an explanation and background:

https://www.youtube.com/watch?v=WA9vrvJZYzo

And then this video to see the app in action:

https://www.youtube.com/watch?v=ON5xHlhNUMw

careMonitor is an Ionic 2 proof of concept application that allows remote monitoring of a vulnerable person.  The person would
require a beacon to be attached tp their wrist and a fixed device placed inside their house.  The application
would run on that device in "Monitor" mode.  You could run the app on another device in "Receiver" mode and be able to
see the results of the monitoring in realtime.

I have developed the application with best practice architecture in mind.  The components are thin lightweight components 
that interact with services and models.  The State model has a custom observer on it which fires a response when the monitoring
status changes (i.e whether or not the beacon moves IN range or OUT of range).  The monitor component subscribes to this
observable and when it receives data, it calls the Firebase service with a request to update the back-end database.

I used Firebase as the back-end as I wanted to make us of it's excellent realtiume data updates - the app uses the latest version
of the AngularFire library - the Firebase client for AngularJS.