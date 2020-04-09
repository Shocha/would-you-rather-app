import React, { Component } from 'react'
import { connect } from 'react-redux'

class Questions extends Component {
    render() {
        return (<div>
            <h4 className="preview-authorname">{this.props.users.name} asks</h4>
            <Image src={this.props.users.avatar} roundedCircle />
            <div className="preview-container">
                <h3>Would you rather</h3>
                <p></p>
            </div>
        </div>)
    }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
    const Questionarr = Object.keys(Questions)
    let userId = null
    if (props.id) {
        userId = id
    } else {
        console.log("error")
    }

    const question = Questionarr[id]
    excerpt = question.optionOne.text.length > 5 ? question.optionOne.text.substring(0, 10) : question.optionOne.text

    return {
        question,
        excerpt,
        name: users[id].name,

    }
}
export default connect(mapStateToProps)(Questions)