exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("Divemalta Updated")
  if (answer === true) {
    window.location.reload()
  }
}
