exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("PWA Updated")
  if (answer === true) {
    window.location.reload()
  }
}
