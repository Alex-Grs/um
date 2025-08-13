<template>
  <div class="container container--grey">
    <div class="containerInner">
      <div class="Dashboard GridL">
        <div class="GridL-3">
          <AsideDashboard />
        </div>
        <slot name="dashboard-content" />
        <slot name="dashboard-widget" />
      </div>
    </div>
  </div>
</template>

<script>
import AsideDashboard from '~/components/dashboard/AsideDashboard'

export default {
  name: 'DashboardInnerLayout',
  components: {
    AsideDashboard
  }
}
</script>
