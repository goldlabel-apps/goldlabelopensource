export function randomDisplayName(): { 
    avatar: string 
    displayName: string 
} {
    const names = [
        "Biker", 
        "Chix", 
        "Dapper", 
        "Hippy", 
        "Hipster", 
        "Mumma", 
        "Punk", 
        "Rasta", 
        "Rocker",
    ]
    const randomIndex = Math.floor(Math.random() * names.length)
    const name = names[randomIndex]
    const randomDigits = Math.floor(Math.random() * 900) + 100
    const displayName = `${name} ${randomDigits}`
    const avatar = `https://free.goldlabel.pro/svg/characters/${name.toLowerCase()}.svg`
    return { avatar, displayName }
}