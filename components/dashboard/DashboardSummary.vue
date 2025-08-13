<template>
  <main class="MainDash">
    <DocumentSummary
      title="Mes commandes"
      see-more-link="/dashboard/mes-commandes"
      type="orders"
      icon="cart"
    >
      <template v-slot:renderItem="slotProps">
        <p class="DocumentSummary-itemHead">
          Commande n°{{ slotProps.item.code }} -
          <span class="DocumentSummary-date">
            {{ $moment(slotProps.item.billDate).format('DD/MM/YYYY') }}
          </span>
        </p>
        <p class="DocumentSummary-price">
          Total: {{ slotProps.item.total }} €HT
        </p>
      </template>
    </DocumentSummary>

    <DocumentSummary
      title="Mes factures"
      see-more-link="/dashboard/bills"
      type="bills"
      icon="cart"
    >
      <template v-slot:renderItem="slotProps">
        <p class="DocumentSummary-itemHead">
          Facture n°{{ slotProps.item.code }} -
          <span class="DocumentSummary-date">
            {{ $moment(slotProps.item.billDate).format('DD/MM/YYYY') }}
          </span>
        </p>
        <p class="DocumentSummary-price">
          Total: {{ slotProps.item.total }} €HT
        </p>
      </template>
    </DocumentSummary>

    <DocumentSummary
      title="Mes devis"
      see-more-link="/dashboard/quotations"
      type="quotations"
      icon="cart"
    >
      <template v-slot:renderItem="slotProps">
        <p class="DocumentSummary-itemHead">
          Devis n°{{ slotProps.item.code }} -
          <span class="DocumentSummary-date">
            {{ $moment(slotProps.item.billDate).format('DD/MM/YYYY') }}
          </span>
        </p>
        <p class="DocumentSummary-price">
          Total: {{ slotProps.item.total }} €HT
        </p>
      </template>
    </DocumentSummary>
    <DocumentSummary
      title="Mes bons de livraison"
      see-more-link="/dashboard/deliveryNotes"
      type="deliveryNotes"
      icon="cart"
    >
      <template v-slot:renderItem="slotProps">
        <p class="DocumentSummary-itemHead">
          bon de livraison n°{{ slotProps.item.code }} -
          <span class="DocumentSummary-date">
            {{ $moment(slotProps.item.billDate).format('DD/MM/YYYY') }}
          </span>
        </p>
        <p class="DocumentSummary-price">
          Total: {{ slotProps.item.total }} €HT
        </p>
      </template>
    </DocumentSummary>
  </main>
</template>

<script>
import DocumentSummary from '~/components/dashboard/DocumentSummary'

export default {
  name: 'DashboardSummary',
  components: {
    DocumentSummary
  }
}
</script>
