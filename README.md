A Meteor package containing Stripe.js (<https://stripe.com/docs/stripe.js>) and Stripe for Node.js (<https://github.com/abh/node-stripe>). Stripe.js is a direct copy of <https://js.stripe.com/v1/>.

## Usage

### Client

The same as in the Stripe docs (<https://stripe.com/docs/stripe.js>). Example for reference:

    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');

### Server

To initiate a Stripe object:

    var Stripe = StripeAPI('YOUR_SECRET_API_KEY');

And then use it:

    Stripe.charges.create({
		amount: 1000,
		currency: "USD",
		card: {
			number: "4242424242424242",
			exp_month: "03",
			exp_year: "2014"
		}
	}, function (err, res) {
		console.log(err, res);
	});

For a complete reference, please see the original: <https://github.com/abh/node-stripe>