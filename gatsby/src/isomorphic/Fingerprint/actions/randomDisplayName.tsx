export function randomDisplayName(): { 
    avatar: string 
    name: string 
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
    const ranName = names[randomIndex]
    const randomDigits = Math.floor(Math.random() * 900) + 100
    const name = `${ranName} ${randomDigits}`
    const avatar = `https://free.goldlabel.pro/svg/characters/${ranName.toLowerCase()}.svg`
    return { avatar, name }
}