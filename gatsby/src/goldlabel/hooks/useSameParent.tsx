export const useSameParent = (
  searchParentSlug: string,
  allMarkdown: any,
) => {
    const docs: Array<any> = []
    for(let i = 0; i < allMarkdown.length; i++){
      const {frontmatter} = allMarkdown[i]
      if (frontmatter.parentSlug === searchParentSlug){
          docs.push({
            order: frontmatter.order,
            ...frontmatter,
          })
      }
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}