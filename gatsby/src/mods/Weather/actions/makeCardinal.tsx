export const makeCardinal = (degrees: number) => {
    const val = Math.floor((degrees / 22.5) + 0.5);
    const arr = ["North", "North North East", "North East", "East North East", "East", "East South East", "South East", "South South East", "South", "South South West", "South West", "West South West", "West", "West North West", "North West", "North North West"];
    return arr[(val % 16)];
}