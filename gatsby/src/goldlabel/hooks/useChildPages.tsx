export const useChildPages = (
  parentSlug: string,
  allMarkdown: any,
) => {
    const docs: Array<any> = []
    for(let i = 0; i < allMarkdown.length; i++){
        const {frontmatter} = allMarkdown[i]
        // console.log("parentSlug", parentSlug)
        if (parentSlug){
            if (frontmatter.parentSlug === parentSlug){
                docs.push({
                    order: frontmatter.order,
                    ...frontmatter,
                })
            }
        }
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}