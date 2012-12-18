Package.describe({
	summary: "Postmark.js brought to Meteor. Client and Server compatible."
});

Package.on_use(function (api) {
	api.use('http', ['client','server']);

	api.add_files('postmark.js',['client','server']);
});