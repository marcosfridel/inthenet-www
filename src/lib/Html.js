/* export const FormatHtml = (html) => {
    console.log('FormatHtml text', html)
    return (
        <>
            <div dangerouslySetInnerHTML={ {__html: `${ html.text }` } } />
        </>
    )
} */

export const FormatHtml = (html) => {
    /* console.log('FormatHtml text', html) */
    return (
        <>
            { html && <div dangerouslySetInnerHTML={ {__html: `${ html }` } } /> }
        </>
    )
}

