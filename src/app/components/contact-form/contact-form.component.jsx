import React from "react";

    export default class ContactForm extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <form method="post">
                <input type="text"/>
                <input type="submit"/>
            </form>
        );
    }
}
