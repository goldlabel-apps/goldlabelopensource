exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("version 2.0.8")
  if (answer === true) {
    window.location.reload()
  }
}
