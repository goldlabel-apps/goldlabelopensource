

export type Fingerprint = {
  created: number
  updated: number
  displayName: string
  uid: string
  host: string
  ua: any
  frontmatter: {
    slug: string
  }
  ipgeolocation: {
    ip: string
    continent_code: string
    continent_name: string
    country_code2: string
    country_code3: string
    country_name: string
    country_name_official: string
    country_capital: string
    state_prov: string
    state_code: string
    district: string
    city: string
    zipcode: string
    latitude: string
    longitude: string
    is_eu: boolean
    calling_code: string
    country_tld: string
    languages: string
    country_flag: string
    geoname_id: string
    isp: string
    connection_type: string
    organization: string
    country_emoji: string
  }
  currency: {
    code: string
    name: string
    symbol: string
  }
  time_zone: {
    name: string
    offset: number
    offset_with_dst: number
    current_time: string
    current_time_unix: number
    is_dst: boolean
    dst_savings: number
    dst_exists: string
    dst_start: string
    dst_end: string
  }
}

export type Message = {
  time: number
  seen: boolean
  message: string
  from: {
    role: string
    displayName: string
    avatar: string
  }
}