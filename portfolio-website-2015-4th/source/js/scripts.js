$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home', 'about','skills', 'projects', 'contact', 'thanks'],
        menu: '#menu',
        loopTop: true,
        loopBottom: true
    });
});
