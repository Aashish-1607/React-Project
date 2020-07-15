import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    renderComments(comments) {
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
            return <div />;
    }
    // {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
    render() {
     const { dish } = this.props;
        return (
            <div class="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">    
                    <h1><b>Comments:</b></h1>
                    <div>{this.renderComments(dish.comments)}</div>
                </div>
            </div>
            </div>
        );
    }
}
export default DishDetail;