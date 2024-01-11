import React from "react";

const Payment = () => {
  return (
    <div className="pb-36">
      <div className="shadow-xl border rounded-3xl bg-white p-5">
        <stripe-pricing-table
          pricing-table-id="prctbl_1OSu6VJZqkpxhhoWT0uX2Ia6"
          publishable-key="pk_live_51NmS90JZqkpxhhoW5IGaR4JrJqYQvvyhmN91YlD8nUW1VWESzVOId8fODAxDLK9ms9ilz5nSGWRy1PQdn0MSMqsg009RuJ7ZoG"
        ></stripe-pricing-table>
      </div>
    </div>
  );
};

export default Payment;
