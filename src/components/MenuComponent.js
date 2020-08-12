import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle  } from 'reactstrap';


function RenderMenuItem({dish, onClick}) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} ></CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 mt-5">
                <RenderMenuItem dish = {dish} onClick = {props.onClick}/>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;