A Meteor package containing Stripe.js (<https://stripe.com/docs/stripe.js>, direct copy of <https://js.stripe.com/v2/>), Stripe Checkout (<https://stripe.com/docs/checkout>, direct copy of <https://checkout.stripe.com/checkout.js>), and Stripe for Node.js (<https://github.com/stripe/stripe-node>).

## Install

Using Meteor's Package System:

	$ meteor add mrgalaxy:stripe

Using Meteorite:

	$ mrt add stripe

## Usage

### Client

The same as in the Stripe docs (<https://stripe.com/docs/stripe.js>). Example for reference:

    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');

**Checkout**

To use [Stripe Checkout](https://stripe.com/docs/checkout#integration-custom) to open a payment form, add the script tag in the `<head>` of your template file:

	<head>
	    <script src="https://checkout.stripe.com/v2/checkout.js"></script>
	</head>

And manually open the Stripe modal, e.g. in an event listener attached to a "Pay" button:

	Template.payment.events({
	    'click button.pay': function() {
	        StripeCheckout.open({
	            key: 'YOUR PUBLIC KEY',
	            amount: 5000,
	            name: 'The Store',
	            description: 'A whole bag of awesome ($50.00)',
	            panelLabel: 'Pay Now',
	            token: function(res) {
	                // Do something with res.id
	                // Store it in Mongo and/or create a charge on the server-side
	                console.info(res);
	            }
	        });
	    }
	});

Stripe will use the "token" function as its callback when the response is returned. The id attribute of that response object is the credit card token, which you use to charge the customer.

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
