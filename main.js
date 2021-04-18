(async () => { 

    const {mwn} = require('mwn')
    const fs = require('fs');
    const bot = new mwn();

    bot.login({
        apiUrl: 'https://en.uncyclopedia.co/w/api.php',
        username: 'JJPMastest II',
        password: 'JJPMastest@p36smdfl87dsic672avtn27329dmm54p'
    });
    bot.enableEmergencyShutoff({
	    page: 'User:JJPMastest II/Run',  	// The name of the page to check 
	    intervalDuration: 5000, 			// check shutoff page every 5 seconds
	    condition: function(pagetext) {		// function to determine whether the bot should continue to run or not
	        if (pagetext == 'False') {	// Example implementation: if some one changes the text to something 
	            return false;				// other than "running", let's decide to stop!
		    } else 
            return true;
	    },
	    onShutoff: function (pagetext) { 	// function to trigger when shutoff is activated
            console.log('The bot is currently disabled; shutting down...') // log to console
	        process.exit();					// let's just exit, though we could also terminate 
	    }									// any open connections, close files, etc.
    });
    await bot.save('User:JJPMaster/sandbox', '&lt;&gt;&nbsp;&nbsp;', 'ha!')
})();
