A Meteor package containing [Stripe](https://stripe.com) scripts:

- [Stripe.js](https://stripe.com/docs/stripe.js)
- [Stripe Checkout](https://stripe.com/docs/checkout)
- [Stripe for Node.js](https://github.com/stripe/stripe-node)

## Install

Using Meteor's Package System:

	$ meteor add mrgalaxy:stripe

## Usage

### Client

Stripe.js is now loaded after all other Meteor scripts so the `Stripe` variable is not going to available when your app first runs. Instead, all calls need to be made after your Meteor app has started, like so:

```js
Meteor.startup(function() {
    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');
});
```

The same goes for StripeCheckout, too:

```js
Meteor.startup(function() {
    var handler = StripeCheckout.configure({
		key: 'YOUR_PUBLISHABLE_KEY',
		token: function(token) {}
	});
});
```

See the Stripe docs (<https://stripe.com/docs/stripe.js>, <https://stripe.com/docs/checkout>) for all the API specifics.

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
