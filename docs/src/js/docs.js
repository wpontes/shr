// ==========================================================================
// Docs example
// ==========================================================================

/*global shr */

// Setup the player
shr.setup({
	debug: 	true,
	count: {
		//position: 'before'
	},
	tokens: {
		github: 'a46ac653210ba6a6be44260c29c333470c3fbbf5'
	}
});

// Google analytics 
// For demo site (http://[www.]plyr.io) only
if(document.domain.indexOf("shr.one") > -1) {
	(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,"script","//www.google-analytics.com/analytics.js","ga");
	ga("create", "UA-40881672-11", "auto");
	ga("send", "pageview");
}