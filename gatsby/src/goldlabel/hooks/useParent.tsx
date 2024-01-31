export const useParent = (
    parentSlug: string,
    allMarkdown: any,
) => {
    let doc: any = null
    for(let i = 0; i < allMarkdown.length; i++){
        const {frontmatter} = allMarkdown[i]
        if (frontmatter.parentSlug === parentSlug){
            doc = {
                order: frontmatter.order,
                ...frontmatter,
            }
            break
        }
    }
    // const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return doc
}
