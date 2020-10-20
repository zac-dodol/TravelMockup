import React from 'react'

import travel from "../assets/images/travel.png"
import rental from "../assets/images/rental.png"
import umrah from "../assets/images/umrah.png"

import Card from "./Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 0, title: 'Travel',
                subTitle: `Destinations of your choosing with complete arrangements for you to indulge`,
                imgSrc: travel,
                link: '#',
                selected: false
            }, {
                id: 1, title: 'Rental & Leasing',
                subTitle: 'Need a better vehicle or simply to lazy to drive yourself',
                imgSrc: rental,
                link: '#',
                selected: false
            }, {
                id: 2, title: 'Umrah & Hajj',
                subTitle: 'Menunaikan ibadah umrah & haji dengan penuh kyushuk',
                imgSrc: umrah,
                link: '#',
                selected: false
            },

            ]
        }
    }

    handleCardClick = (id, card) => {


        let items = [...this.state.items]

        //For the particular item that was selected, if its selected is true, set it to false and vice versa
        items[id].selected = items[id].selected ? false : true

        //To get only 1 item active at a time, we set all the other unselected items to selected false
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        });

        this.setState({
            items
        })
    }

    makeItems = (item) => {

        return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />

    }

    render() {

        let columns = []

        this.state.items.forEach((item, idx) => {
            columns.push(
                this.makeItems(item)
            )

            // if ((idx + 1) % 2 === 0) { columns.push(<div className="w-100 separating-div" key={null}></div>) }
        })

        return (
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {columns}
                </Row>
            </Container>
        )
    }


}

export default Carousel;




// render() {
//     let columns = []
//     this.state.items.forEach((item, idx) => {

//         columns.push(
//             this.makeItems(item)
//         )
//         if ((idx + 1) % 3 === 0) { columns.push(<div className="w-100" key={null}></div>) }
//     })


//     return (
//         <Container fluid={true}>
//             <Row className="justify-content-around">
//                 {columns}
//             </Row>
//         </Container>
//     )
// }




