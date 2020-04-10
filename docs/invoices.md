[[toc]]

## Lifecycle of an invoice

### Draft

<p>The Draft status is the first status in the lifecycle of a invoice. In this status changes can be made to the invoice and the invoice is hidden completely from the client. A draft invoice does not effect the ledger nor does it change the client balance. Draft invoices are inactive until either emailed to the client or marked as sent.</p>

::: warning
Once a draft invoice has been emailed/marked as sent its status cannot be changed back to draft.
:::

### Sent

<p>A invoice is marked as sent when it has been emailed to the client or marked as <i>sent</i> in the admin panel</p>

<p>When the invoice status is changed to Sent, the client balance increases by the <i>invoice balance</i> amount</p>

### Partial

<p>A invoice status of Partial means that a payment has been applied to the invoice but there is still a outstanding balance remaining on the invoice.</p>

### Paid

<p>A invoice status of Paid means that full payment has been applied to the invoice. The <i>invoice balance</i> will be 0.</p>

### Cancelled

<p>A invoice can be cancelled under the following conditions</p>

* The invoice is marked as Sent, Partial or Paid (ie. some payment amount has been applied)

<p>When a invoice is cancelled the <i>invoice balance</i> is set to zero and the status updated to <b>Cancelled</b>, the <i>client balance</i> is also adjusted down. If payments have been applied to the invoice these will remain linked to the invoice.</p>

### Deleted

<p>A invoice can be marked as deleted if the following conditions have been met</p>

* The invoice is marked as Sent / Draft.
* The invoice does not have any payments applied to it.

<p>What happens when a invoice is deleted?</p>

* Invoice balance set to 0
* Client balance is reduced by the invoice balance
* Invoice status set to deleted

### Reversed

<p>A invoice can be reversed under the following conditions</p>

* The invoice is marked as Sent, Partial or Paid (ie. some payment amount has been applied to the invoice)

<p>When a invoice is reversed the payment/s that have been applied to the invoice have a credit generated against them. The ledger is also adjusted as follows:</p>

* The client paid to date amount is reduced by the calculated amount of (invoice balance - invoice amount).
* A credit is generated for the payments applied to the invoice (invoice balance - invoice amount).
* The client balance is reduced by the invoice balance.
* The invoice balance is finally set to 0.
* The invoice status is set to Reversed.

<p>When a invoice has been reversed, the previous payments relationships are unlinked and cannot be restored.</p>

### Archived

<p>Archiving a invoice simply removes the invoice from the invoice list view. Archiving a invoice keeps your list views clean and tidy and does not effect the ledger / client balance.</p>

:::warning
When a invoice is archived no further modifications can be made to the invoice. To modify the invoice you will need to Restore the invoice first.
:::

### Restored

<p>Restoring a invoice from the archived state will set the invoice back to its previous state prior to archiving.</p>