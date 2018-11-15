import React, { Component } from "react";
import ReactStars from "react-stars";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { rateArticle }  from '../actions/RatingAction';


let submittedRating;

class Rating extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.rating) {
            toast.success(`A rating of ${submittedRating} has been submitted`, {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar:true
            });
        }
        if (nextProps.message === 'The token is invalid') {
            toast.error("Please login first", {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar:true
            });
        } else if (nextProps.message === 'Sorry, you cannot rate your own article.') {
            toast.error(nextProps.message, {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar:true
            });
        }
    }

    getRating () {
        if (this.props.rating) {
            return this.props.rating
        } return this.props.initialRating
    }

    roundFigure (num, degree) {
        return (Math.round(num*degree)/degree)
    }

    handleRating = rating => {
        const slug = this.props.slug
        submittedRating = this.roundFigure(rating, 10);
        const data = {
        article: {
            rating: this.roundFigure(rating, 1)
        }};
        this.props.rateArticle(data, slug);
    };
    
    render() {
        const displayValue = this.roundFigure(this.getRating(), 10);
        return (

            <div className="container">
                <a 
                href="#" 
                data-toggle="tooltip" 
                title={`Rating: ${displayValue}`}>
                    <ReactStars
                    half={true}
                    value={this.roundFigure(displayValue, 2)}
                    count={5}
                    onChange={this.handleRating}
                    size={15}
                    color1={"#fff"}
                    color2={"#000"}/>
                </a>
            </div>
        );
    }}
    
    const mapStateToProps = state => ({
        rating: state.rating.rating,
        message: state.rating.message,
        initialRating: state.articles.article.article.rating
    })
 
export default connect(mapStateToProps,{rateArticle})(Rating);
