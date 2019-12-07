import * as React from 'react'

import './styles.scss'

const PageHeader: React.FunctionComponent = props => { 
    return (
        <header>
            <h1>Welcome to the party, pal</h1>
            {props.children}
        </header>
    ) 
}

export default PageHeader