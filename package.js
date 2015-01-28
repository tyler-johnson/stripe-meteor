Package.describe({
	summary: "Stripe.js and Node-Stripe brought to Meteor.",
	version: "1.5.7",
	name: "mrgalaxy:stripe",
	git: "https://github.com/tyler-johnson/stripe-meteor.git"
});

Npm.depends({ "stripe": "3.0.3" });

Package.onUse(function (api) {
	if (api.export) api.export('STRIPEMETEOR');
	api.addFiles('stripe_client.js', 'client');
	api.addFiles('stripe_checkout.js', 'client');
	api.addFiles('stripe_server.js', 'server');
});