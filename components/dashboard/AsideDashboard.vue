<template>
  <aside class="AsideDash">
    <h2 class="AsideDash-title">Bienvenue dans votre espace client</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <nuxt-link :to="link.href" class="AsideDash-item">
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AsideDashboard',
  data() {
    return {
      links: [
        {
          label: 'Mon Dashboard',
          href: '/dashboard'
        },
        {
          label: 'Mes Commandes',
          href: '/dashboard/mes-commandes'
        },
        {
          label: 'Mes Bons de livraison',
          href: '/dashboard/bons'
        },
        {
          label: 'Mes Factures',
          href: '/dashboard/factures'
        },
        {
          label: 'Mes Devis',
          href: '/dashboard/devis'
        },
        {
          label: 'Mes Chantiers',
          href: '/dashboard/chantiers'
        },
        {
          label: 'Mon Top achat',
          href: '/dashboard/topachat'
        }
      ]
    }
  }
}
</script>
