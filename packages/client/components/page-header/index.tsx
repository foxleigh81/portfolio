import * as React from 'react'

const PageHeader: React.FunctionComponent = props => { 
    return (
        <header>
            <h1>Welcome to the party, pal</h1>
            {props.children}
        </header>
    ) 
}

export default PageHeader