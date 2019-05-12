import React from 'react';

export default function Container(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <div className="wrapper">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};