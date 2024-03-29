import React from "react";
import RecipeReviewCard from './post'; // Adjust the path accordingly
import Sidebar from '../sidebar/Sidebar';
import '../../styles/consult.css';
import { useNavigate, Link } from "react-router-dom";


export default function Advertising() {
    const navigate = useNavigate()
    return (
        <>

            <Sidebar />
            <div className="recipe-review-card-container"> {/* Added container for recipe cards */}

                <div className="create-post-btn"> {/* Added container for the button */}

                    <button onClick={() => navigate('/Createpost')} >Create Post</button> {/* Your Create Post button */}
                </div>

                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
            </div>
        </>
    )
}
