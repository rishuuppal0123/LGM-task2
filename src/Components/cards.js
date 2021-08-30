import React from 'react'

const Users = ({ loading, users }) => {
    const userview = {
        display: 'grid',
        gridTemplateColumns: 'repeat(' + 3 + ',' + 1 + 'fr)'
    };

    return loading ? ( <
            div id = "main"
            align = "center" >
            <
            img src = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif"
            alt = "Loading"
            className = "loader" / >
            <
            /div>
        ) :
        ( <
            div id = "main"
            style = { userview } >

            {
                users.map(user =>
                    <
                    div className = "userGrid"
                    key = { user.id } >
                    <
                    img src = { user.avatar }
                    alt = { user.avatar }
                    className = "avatar" / >
                    <
                    h1 className = "name" > { user.first_name } { user.last_name } < /h1> <
                    p className = "email" > Email: { user.email } < /p> <
                    p > ID No.: { user.id } < /p> < /
                    div >
                )
            } <
            /div>
        )
}

export default Users;