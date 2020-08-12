import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderComments({comments}) {
    if(comments!=null){
        const list = comments.map((comment) =>{
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            let dt = new Date(comment.date);
            return (
                <li key={comment.id}>
                    {comment.comment}<br/><br/>
                    -- {comment.author}, {dt.toLocaleString('en-US', options)}
                    <br/><br/>
                </li>  
            );
        });
        return(
            <div className="col-12 col-md-7 mt-5">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
            </div>
        );
    }else{
        return (<div></div>);
    }  
}

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 mt-5">
            <Card>
                <CardImg top width="100%" object src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>    
        </div>    
    )
}

const DishDetail = (props) => {
    if(props.dish!=undefined){
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments comments = {props.dish.comments} />
                </div>
             </div>
        )
    }else{
        return(<div></div>);
    }
}

export default DishDetail;