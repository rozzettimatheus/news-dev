export const nameUtils = {
  getInitials: (name: string = '') => {
    const [first, second, ..._] = name.split(' ')
    if (!first || first.length === 0) {
      return ''
    }
    const initials = !!second ? first[0] + second[0] : first.slice(0, 2)
    return initials.toUpperCase()
  }
}
