import React from 'react';

export  default class BlockLayout extends React.Component {
    render() {

        return (
            <div className="block">
                <div className="container container_index">
                    {this.props.children}
                </div>
            </div>
        )
    }
}