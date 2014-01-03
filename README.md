A Meteor package containing Stripe.js (<https://stripe.com/docs/stripe.js>, direct copy of <https://js.stripe.com/v2/>), Stripe Checkout (<https://stripe.com/docs/checkout>, direct copy of <https://checkout.stripe.com/checkout.js>), and Stripe for Node.js (<https://github.com/stripe/stripe-node>).

## Install

Using Meteor's Package System:

1. Make a new directory named `packages` in the root of your app directory.

		$ mkdir packages
		
2. Copy the contents of this repository to a folder named `stripe`. We use `git clone` to simplify this process.

		$ git clone git@github.com:appleifreak/stripe-meteor.git stripe
		
3. Tell your Meteor app about the new package.

		$ meteor add stripe
		
Using Meteorite:

	$ mrt add stripe

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

For a complete reference, please see the original: <https://github.com/stripe/stripe-node>
