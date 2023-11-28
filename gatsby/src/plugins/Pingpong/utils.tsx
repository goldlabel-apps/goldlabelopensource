export const iconFromHost = (
    host: string, 
    allHosts: any,
  ) => {
    for (let i=0; i < allHosts.length; i++){
      if(host === allHosts[i].host) return allHosts[i].icon
    }
    return "/svg/hosts/localhost.svg"
  }