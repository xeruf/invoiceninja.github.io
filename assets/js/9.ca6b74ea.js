(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{252:function(e,a,t){"use strict";t.r(a);var i=t(28),n=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#lifecycle-of-an-invoice"}},[e._v("Lifecycle of an invoice")]),t("ul",[t("li",[t("a",{attrs:{href:"#draft"}},[e._v("Draft")])]),t("li",[t("a",{attrs:{href:"#sent"}},[e._v("Sent")])]),t("li",[t("a",{attrs:{href:"#partial"}},[e._v("Partial")])]),t("li",[t("a",{attrs:{href:"#paid"}},[e._v("Paid")])]),t("li",[t("a",{attrs:{href:"#cancelled"}},[e._v("Cancelled")])]),t("li",[t("a",{attrs:{href:"#deleted"}},[e._v("Deleted")])]),t("li",[t("a",{attrs:{href:"#reversed"}},[e._v("Reversed")])]),t("li",[t("a",{attrs:{href:"#archived"}},[e._v("Archived")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"lifecycle-of-an-invoice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-of-an-invoice"}},[e._v("#")]),e._v(" Lifecycle of an invoice")]),e._v(" "),t("h3",{attrs:{id:"draft"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#draft"}},[e._v("#")]),e._v(" Draft")]),e._v(" "),t("p",[e._v("A draft invoice are hidden from the clients with the invoice amount / balance not applied to the ledger. Draft invoices are inactive until either emailed to the client or marked as sent.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Once a draft invoice has been emailed/marked as sent its status cannot be changed back to draft.")])]),e._v(" "),t("h3",{attrs:{id:"sent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sent"}},[e._v("#")]),e._v(" Sent")]),e._v(" "),t("p",[e._v("An invoice is marked as sent when it has been emailed to the client or Marked as _sent_ in the admin panel")]),e._v(" "),t("p",[e._v("When the invoice status is changed to Sent, the client balance increases by the _invoice balance_ amount")]),e._v(" "),t("h3",{attrs:{id:"partial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partial"}},[e._v("#")]),e._v(" Partial")]),e._v(" "),t("p",[e._v("An invoice status of Partial means that a payment has been applied to the invoice, but there is still an outstanding balance remaining on the invoice.")]),e._v(" "),t("h3",{attrs:{id:"paid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paid"}},[e._v("#")]),e._v(" Paid")]),e._v(" "),t("p",[e._v("An invoice status of Paid means that full payment has been applied to the invoice. The _invoice balance_ will be 0.")]),e._v(" "),t("h3",{attrs:{id:"cancelled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancelled"}},[e._v("#")]),e._v(" Cancelled")]),e._v(" "),t("p",[e._v("An invoice can be cancelled under the following conditions")]),e._v(" "),t("ul",[t("li",[e._v("The invoice is marked as Partial or Paid (ie. some payment amount has been applied)")])]),e._v(" "),t("p",[e._v("When an invoice is cancelled the invoice balance is set to zero and the status updated to "),t("b",[e._v("Cancelled")]),e._v(" If payments have been applied to the invoice these will remain linked to the invoice.")]),e._v(" "),t("h3",{attrs:{id:"deleted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deleted"}},[e._v("#")]),e._v(" Deleted")]),e._v(" "),t("p",[e._v("An invoice can be marked as deleted if the following conditions have been met")]),e._v(" "),t("ul",[t("li",[e._v("The invoice is marked as Sent / Draft.")]),e._v(" "),t("li",[e._v("The invoice does not have any payments applied to it.")])]),e._v(" "),t("p",[e._v("What happens when an invoice is deleted?")]),e._v(" "),t("ul",[t("li",[e._v("Invoice balance set to 0")]),e._v(" "),t("li",[e._v("Client balance is reduced by the invoice balance")]),e._v(" "),t("li",[e._v("Invoice status set to deleted")])]),e._v(" "),t("h3",{attrs:{id:"reversed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reversed"}},[e._v("#")]),e._v(" Reversed")]),e._v(" "),t("p",[e._v("An invoice can be reversed under the following conditions")]),e._v(" "),t("ul",[t("li",[e._v("The invoice is marked as Partial or Paid (ie. some payment amount has been applied)")])]),e._v(" "),t("p",[e._v("When an invoice is reversed the payment/s that have been applied to the invoice have a credit generated against them. The ledger is also adjusted as follows:")]),e._v(" "),t("ul",[t("li",[e._v("The client paid to date amount is reduced by the calculated amount of (invoice balance - invoice amount).")]),e._v(" "),t("li",[e._v("A credit is generated for the payments applied to the invoice (invoice balance - invoice amount).")]),e._v(" "),t("li",[e._v("The client balance is reduced by the invoice balance.")]),e._v(" "),t("li",[e._v("The invoice balance is finally set to 0.")]),e._v(" "),t("li",[e._v("The invoice status is set to Reversed.")])]),e._v(" "),t("p",[e._v("When an invoice has been reversed, the previous payments relationships are broken and cannot be restored.")]),e._v(" "),t("h3",{attrs:{id:"archived"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archived"}},[e._v("#")]),e._v(" Archived")]),e._v(" "),t("p",[e._v("Archiving an invoice simply removes the invoice from the invoice list view. Archiving an invoice keeps your list views clean and tidy and does not effect the ledger / client balance.")])])}),[],!1,null,null,null);a.default=n.exports}}]);