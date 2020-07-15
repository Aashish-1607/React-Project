import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


    function RenderComments({comments}) {
        if (comments != null) {
            let options = { year: "numeric", month: "short", day: "numeric" };
            return comments.map(comment => (
                <ul key={comment.id} className="list-unstyled">
                    <li className="mb-2">{comment.comment}</li>
                    <li>
                     -- {comment.author}{" "}
                    {new Date(comment.date).toLocaleDateString("en-US", options)}
                    </li>
                </ul>
            ));
        } 
        else
            return( 
                <div />
            );
    }

    function RenderDishDetails({dish}){
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    // {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDishDetails dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h1><b>Comments:</b></h1>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div />
        );
}

export default DishDetail;