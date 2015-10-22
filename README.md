A Meteor package containing [Stripe](https://stripe.com) scripts:

- [Stripe.js](https://stripe.com/docs/stripe.js)
- [Stripe Checkout](https://stripe.com/docs/checkout)
- [Stripe for Node.js](https://github.com/stripe/stripe-node)

## Install

Using Meteor's Package System:

	$ meteor add mrgalaxy:stripe

## Usage

### Client

In order for Stripe.js to be loaded directly on iOS and Android a new rule needs to be created in your `mobile-config.js` located in the root of your project. Create the new file if it doesn't already exist and insert the line below.

```js
App.accessRule('https://*.stripe.com/*');
```

In order to allow the `Stripe` variable to be accessible it must be loaded in the `Meteor.startup`. This will ensure that calls are deferred until after your Meteor app has started.

```js
Meteor.startup(function() {
    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');
});
```

The same goes for Stripe Checkout, too:

```js
Meteor.startup(function() {
    var handler = StripeCheckout.configure({
		key: 'YOUR_PUBLISHABLE_KEY',
		token: function(token) {}
	});
});
```

In order to remain PCI compliant under the new DSS 3.0 rules, ***never*** send credit card details to the server. Use client-side credit card details to create a secure token, per this example:

```js
ccNum = $('#ccnum').val();
cvc = $('#cvc').val();
expMo = $('#exp-month').val();
expYr = $('#exp-year').val();

Stripe.card.createToken({
	number: ccNum,
	cvc: cvc,
	exp_month: expMo,
	exp_year: expYr,
}, function(status, response) {
	stripeToken = response.id;
	Meteor.call('chargeCard', stripeToken);
});
```

See the Stripe docs (<https://stripe.com/docs/stripe.js>, <https://stripe.com/docs/checkout>) for all the API specifics.

### Server

```js
Meteor.methods({
  'chargeCard': function(stripeToken) {
    var Stripe = StripeAPI('SECRET_KEY');

    Stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});
```

For a complete reference, please see the original: <https://github.com/stripe/stripe-node>
