import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText } from 'reactstrap';

function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md mt-3 mb-3">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md mt-3 mb-3">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md mt-3 mb-3">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;