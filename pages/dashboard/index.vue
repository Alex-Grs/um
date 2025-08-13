<template>
  <DashboardInnerLayout>
    <DashboardSummary slot="dashboard-content" class="GridL-6 Dashboard-main" />
    <WidgetDash slot="dashboard-widget" class="GridL-3 Dashboard-widget" />
  </DashboardInnerLayout>
</template>

<script>
import WidgetDash from '~/components/dashboard/WidgetDash'
import DashboardInnerLayout from '~/components/dashboard/DashboardInnerLayout'
import DashboardSummary from '~/components/dashboard/DashboardSummary'

export default {
  name: 'Dashboard',
  middleware: 'authenticated',
  components: {
    WidgetDash,
    DashboardInnerLayout,
    DashboardSummary
  }
}
</script>
