import React, { useEffect, useState } from 'react';
// import GiveReviews from '../GiveReviews';
import Popup from 'reactjs-popup';

import { useNavigate } from 'react-router-dom';

const ReviewFrom = () => {
  const [reviewData, setReviewData] = useState({});

  const reportData = [
    {
      serialNumber: 1,
      doctorName: 'Dr. John Doe',
      doctorSpeciality: 'Cardiology',
      // charges: '$100',
      reportUrl: 'https://example.com/report1',
    },
    {
      serialNumber: 2,
      doctorName: 'Dr. Jane Smith',
      doctorSpeciality: 'Dermatology',
      // charges: '$80',
      reportUrl: 'https://example.com/report2',
    },
    // Add more report data objects as needed
  ];

  const handleGiveReview = (serialNumber) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      [serialNumber]: ''
    }));
  };

  const handleReviewSubmit = (serialNumber, review) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      [serialNumber]: review
    }));
  };
  const navigate = useNavigate();
  useEffect(() => {
      const authtoken = sessionStorage.getItem("auth-token");
    //   if (!authtoken) {
    //       navigate("/login");
    //   }
  }, [])
  return (
    <div style={{ marginTop: '10%' }} className="reviews-container">
      <h1>Reviews</h1>
      <table className="report-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            {/* <th>Charges</th> */}
            <th>Provide Review</th>
            <th>Review Feedback</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.serialNumber}>
              <td>{report.serialNumber}</td>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpeciality}</td>
              {/* <td>{report.charges}</td> */}
            <td>
            <button
                        className="give-review-button"
                        onClick={() => handleGiveReview(report.serialNumber)}
                      >
                        Feedback
                      </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewFrom;