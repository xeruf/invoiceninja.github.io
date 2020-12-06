(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#adding-payment-gateways"}},[e._v("Adding payment gateways")])])])]),a("p"),e._v(" "),a("h1",{attrs:{id:"developer-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-resources"}},[e._v("#")]),e._v(" Developer resources")]),e._v(" "),a("h2",{attrs:{id:"adding-payment-gateways"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-payment-gateways"}},[e._v("#")]),e._v(" Adding payment gateways")]),e._v(" "),a("p",[e._v("Payment Driver Template.")]),e._v(" "),a("p",[e._v("So you want to make a payment driver for invoice ninja, but where to start? The first step would be to reach out to us directly on Slack https://invoiceninja.slack.com and have a chat to us in real time we can help you hit the ground running and build your driver in the most efficient way possible. Contacting us prior will also ensure that your code can be merged back into the official repository as we will be maintaining this code into the future.")]),e._v(" "),a("p",[e._v("Ready? Lets go!")]),e._v(" "),a("p",[e._v("Step 1.")]),e._v(" "),a("p",[e._v("You should update your code to be up to date with the v5-develop branch.")]),e._v(" "),a("p",[e._v("You will then want to create your own branch for for your driver ie.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git branch my_special_driver\n")])])]),a("p",[e._v("Add the gateway into the gateways table")]),e._v(" "),a("p",[e._v("Lets create a migration file which will insert a record identifying the gateway.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("php artisan make:migration my_new_gateway\n")])])]),a("p",[e._v("Let open this file and in the up() method create our new gateway record")]),e._v(" "),a("p",[e._v("Init a new gateway instance")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$gateway = new Gateway;\n$gateway->name = 'Fancy Gateway'; \n$gateway->key = Str::lower(Str::random(32)); \n$gateway->provider = ‘FancyGateway’;\n$gateway->is_offsite = true;\n$gateway->fields = new \\stdClass;\n$gateway->visible = true;\n$gateway->site_url = ‘https://stripe.com’;\n$gateway->default_gateway_type_id = 1;\n$gateway->save();\n")])])]),a("h4",{attrs:{id:"gateway-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-properties"}},[e._v("#")]),e._v(" Gateway Properties")]),e._v(" "),a("ul",[a("li",[e._v("name: The name of your gateway")]),e._v(" "),a("li",[e._v("key: A random 32 alphanumeric gateway key (Type: string)")]),e._v(" "),a("li",[e._v("provider: This is a camel cased string which is used to initialize your payment driver. We append the string Driver to this class, so if you payment driver is FancyGatewayDriver, then your provider will be FancyGateway. (Type: string)")]),e._v(" "),a("li",[e._v("is_offsite: Specifies is this payment driver redirects the user to another page to complete the payment. Paypal Express for instance redirects to Paypal, and then returns the user once the payment is completed (Type: bool)")]),e._v(" "),a("li",[e._v("fields: A stdClass object of key values which defines the user settings required for the gateway, ie, Api Keys, Secrets etc. All of these fields are strings except for testMode which is a boolean and indicates whether the gateway is set to test mode. (Type stdClass)")]),e._v(" "),a("li",[e._v("visible: Defines whether the gateway should be visible in the UI (Type: bool)")]),e._v(" "),a("li",[e._v("site_url: A URL field which allows the user to go directly to the gateway page for further information (Type: string, url)")]),e._v(" "),a("li",[e._v("default_gateway_type_id: If your gateway has multiple ways to pay, ie Credit Card, Bank Transfer etc, then you’ll want to select a default method. The list of defined methods are found on the GatewayType model as follows:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    const CREDIT_CARD = 1;\n    const BANK_TRANSFER = 2;\n    const PAYPAL = 3;\n    const CRYPTO = 4;\n    const CUSTOM = 5;\n    const ALIPAY = 6;\n    const SOFORT = 7;\n    const APPLE_PAY = 8;\n    const SEPA = 9;\n    const CREDIT = 10;\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);