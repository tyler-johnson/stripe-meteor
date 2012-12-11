Package.describe({
	summary: "Stripe.js for Meteor"
});

Package.on_use(function (api) {
	api.add_files('stripe-load.js', 'client');
});