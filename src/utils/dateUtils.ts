import moment from 'moment'

export const dateUtils = {
  getToday() {
    return moment().format('YYYY-MM-DD')
  },

  getYesterday() {
    return moment().subtract(1, 'day').format('YYYY-MM-DD')
  },

  getThisWeek() {
    const start = moment().subtract(6, 'day').format('YYYY-MM-DD')
    const end = moment().format('YYYY-MM-DD')

    return [start, end]
  },

  getLastWeek() {
    const start = moment().subtract(13, 'day').format('YYYY-MM-DD')
    const end = moment().subtract(7, 'day').format('YYYY-MM-DD')

    return [start, end]
  },

  getThisMonth() {
    const start = moment().subtract(1, 'month').format('YYYY-MM-DD')
    const end = moment().format('YYYY-MM-DD')

    return [start, end]
  },

  getLastMonth() {
    const start = moment().subtract(2, 'month').format('YYYY-MM-DD')
    const end = moment().subtract(1, 'month').format('YYYY-MM-DD')

    return [start, end]
  },
}
