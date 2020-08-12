import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
class DishDetail extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    renderComments(Comments) {

        if(Comments!=null){

            const list = Comments.map((Comment) =>{
            
                let options = { year: 'numeric', month: 'long', day: 'numeric' };
                let dt = new Date(Comment.date);
    
                return (
    
                    <li key={Comment.id}>
                        {Comment.comment}<br/><br/>
                        -- {Comment.author}, {dt.toLocaleString('en-US', options)}
                        <br/><br/>
                    </li>
                    
                )
            });

            return(
                <div className="col-12 col-md-7 mt-5">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )

        }else{
            return (
                <div></div>
            )
        }
        
    }

    render() {
        console.log(this.props);
        var Dish = this.props.dish;
        if(Dish !== undefined){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mt-5">
                            <Card>
                                <CardImg top width="100%" object src={Dish.image} alt={Dish.name}></CardImg>
                                <CardBody>
                                    <CardTitle >{Dish.name}</CardTitle>
                                    <CardText>{Dish.description}</CardText>
                                </CardBody>
                            </Card>    
                        </div>
                        {this.renderComments(Dish.comments)}
                    </div>
                </div>  
                
            )
        }else{
            return (
                <div></div>
            )
        }
        
    }
}

export default DishDetail;