<template>
  <div class="OrderOverview">
    <div class="OrderOverview-header">
      <div>
        Commande N° <span>{{ order.code }}</span> -
        {{ toShortDate(order.createdAt) }}
      </div>
      <div>
        Total : <span>{{ order.total }} €</span> HT
      </div>
    </div>
    <div>
      <div>
        <div class="OrderOverview-productsHeader">
          <div class="OrderOverview-productHeaderDesignation">Désignation</div>
          <div class="OrderOverview-productQuantity">Quantité</div>
          <div class="OrderOverview-productPrice">P.U</div>
        </div>
        <div
          v-for="orderProduct in order.items"
          :key="orderProduct.code"
          class="OrderOverview-product"
        >
          <div class="OrderOverview-productDesignation">
            <div class="OrderOverview-productReference">
              {{ orderProduct.productCode }}
            </div>
            <div class="OrderOverview-productLabel">
              {{ orderProduct.label }}
            </div>
          </div>
          <div class="OrderOverview-productQuantity">
            {{ orderProduct.quantity }}
          </div>
          <div class="OrderOverview-productPrice">
            {{ orderProduct.unitPrice }} € HT
          </div>
        </div>
      </div>
      <div class="OrderOverview-agency">
        Agence : <strong>{{ order.agency.name }}</strong>
      </div>
      <div class="OrderOverview-actions">
        <Btn value="Commander à nouveau" />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/Btn'

import dateMixin from '~/mixins/date'

export default {
  name: 'OrderOverview',
  components: {
    Btn
  },
  mixins: [dateMixin],
  props: {
    order: {
      type: Object,
      default: null
    }
  }
}
</script>
