This is a port of Postmark.js (https://github.com/voodootikigod/postmark.js) for Meteor. Only works on server (I think PostmarkApp blocks the client). Here is basic usage:

	Postmark("841b86e0-126a-4dd5-a6b9-c95056f3e49c").send({
		From: "Test <test@example.com>",
		To: "foo@bar.com",
		Subject: "Test",
		TextBody: "Hullo!"
	}, function (err, res) {
		console.log(err, res);
	});