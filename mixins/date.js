import moment from 'moment'

export default {
  methods: {
    toShortDate: (date) => {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}
