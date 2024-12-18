import React, { useContext } from 'react'
// sử dụng themeContext
import { ThemeContext } from './DemoContext'


function DemoContext2() {
    // lấy cái theme từ theme Context
    const theme = useContext(ThemeContext)
    return (
        <div>
            <h4>
                DemoContext2
            </h4>
            <p className={theme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi hic earum molestias doloribus, a perferendis sit incidunt voluptatibus modi nesciunt nobis in facilis consequatur maiores amet, facere accusantium mollitia laboriosam.</p>
        </div>
    )
}

export default DemoContext2