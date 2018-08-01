export default {
  changeCity (stat, city) {
    stat.city = city
    try {
      localStorage.city = city
    } catch (e) {
      console.log(e)
    }
  }
}
