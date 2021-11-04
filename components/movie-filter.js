import React from 'react'

export default function MovieFilter(props) {
    return (
        <div className="section">
          <div className="columns">
            <div className="column has-text-left">
                {props.children}
            </div>
          </div>
        </div>
    )
}
