import React from 'react'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchVisible: false
        }
    }
    render() {

        const searchInputClass = ["searchInput"];
        if (this.state.searchVisible) {
            searchInputClass.push('active')
        }

        const wrapperStyle = {
            background: 'rgba(251, 102, 43, 1)'
        }

        const titleStyle = {
            color: '#111111'
        }
        const menuColor = {
            backgroundColor: '#222222'
        }

        return (
            <div style={wrapperStyle} className="header">
                <div className="menuIcon">
                    <div className="dashTop" style={menuColor}></div>
                    <div className="dashBottom" style={menuColor}></div>
                    <div className="circle" style={menuColor}></div>
                </div>

                <div className="fa fa-more"/>
                <span style={titleStyle} className="title">
                    {this.props.title}
                </span>

                <input
                    type="text"
                    className={searchInputClass.join(' ')}
                    placeholder="Search ..."/>
                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

export default Header