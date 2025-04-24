// components/QuotePopup.js
import React from "react";

const QuotePopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-form-overlay" style={{ display: "flex" }}>
            <div className="popup-form-box">
                <span className="close-popup" onClick={onClose}>&times;</span>
                <h2>
                    Get a Free <span>Quote</span>
                </h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="form-control"
                            placeholder="Enter Your Message"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary common_btn Quote">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuotePopup;
