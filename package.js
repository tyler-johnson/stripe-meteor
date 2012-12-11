Package.describe({
	summary: "Stripe.js for Meteor"
});

Package.on_use(function (api) {
	api.add_files('stripe_client.js', 'client');
	api.add_files('stripe_server.js', 'server');
});