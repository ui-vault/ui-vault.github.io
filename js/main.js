$(document).ready(function() {
            $('#myContainer').multiscroll({
            	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
            	anchors: ['home', 'projects', 'about'],
            	menu: '#menu',
            	navigation: true,
            	navigationTooltips: ['Home', 'Projects', 'About'],
            	loopBottom: false,
            	loopTop: false
            });
        });
