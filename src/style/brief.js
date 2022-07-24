const color = {
    light: {
        backgroundColor: '#fff',
        font: '#212529',
    },
    dark: {
        backgroundColor: '#212529',
        font: '#eeeeee',
    }
}

const site = {
    overflowX: 'hidden',
    margin: '0px',
    padding: '0px',
    height: 'inherit'
}
const container = {
    ...site,
    paddingLeft: '5%',
    paddingRight: '5%',
    height: 'inherit'
}
const page = {
    ...site,
    borderWidth: '0px',
    borderRadius: '0px',
    height: '100%',
}
const navbar = {
    borderWidth: '0px',
    borderRadius: '0px',
}
const fixedBottom = {
    display: 'block !important',
    position: 'fixed',
    bottom: '30px',
    right: '30px',
}

const light = {
    container: {
        ...container,
        backgroundColor: color.light.backgroundColor,
        color: color.light.font
    },
    page: {
        ...page,
        backgroundColor: color.light.backgroundColor,
        color: color.light.font
    },
    navbar: {
        ...navbar,
        backgroundColor: color.light.backgroundColor,
        color: color.light.font
    },
    card: {
        backgroundColor: color.light.backgroundColor
    },
    input: {
        backgroundColor: color.light.backgroundColor,
        color: color.light.font
    },
    listgroup: {
        item: {
            backgroundColor: color.light.backgroundColor
        }
    },
    select: {
        backgroundColor: color.light.backgroundColor,
        color: color.light.font
    },
    fixedBottom: {
        ...fixedBottom,
    }
}

const dark = {
    container: {
        ...container,
        backgroundColor: color.dark.backgroundColor,
        color: color.dark.font
    },
    page: {
        ...page,
        backgroundColor: color.dark.backgroundColor,
        color: color.dark.font
    },
    navbar: {
        ...navbar,
        backgroundColor: color.dark.backgroundColor,
        color: color.dark.font
    },
    card: {
        backgroundColor: color.dark.backgroundColor
    },
    input: {
        backgroundColor: color.dark.backgroundColor,
        color: color.dark.font
    },
    listgroup: {
        item: {
            //'background-color': 'red'
            backgroundColor: color.dark.backgroundColor,
            color: color.dark.font
        }
    },
    select: {
        backgroundColor: color.dark.backgroundColor,
        color: color.dark.font
    },
    fixedBottom: {
        ...fixedBottom,
    },
}

export default {
    //container: container,
    light: light,
    dark: dark
}

