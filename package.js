Package.describe({
	summary: "Stripe.js and Node-Stripe brought to Meteor."
});

Npm.depends({ "stripe": "2.1.0-rc3" });

Package.on_use(function (api) {
	
	 // ensure backwards compatibility with Meteor pre-0.6.5
	if (api.export){
	    api.export('STRIPEMETEOR');
	}
    
	api.add_files('stripe_client.js', 'client');
	api.add_files('stripe_checkout.js', 'client');
	api.add_files('stripe_server.js', 'server');
});
