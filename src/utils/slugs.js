export const customPagesSlugs = ['blog'];

export const isCustomPageUri = (uri) => {
    const pagesToExclude = [
        '/',
    ]

    return pagesToExclude.includes(uri)
}
