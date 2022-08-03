import React from "react";

const ListErrors = ({ errors, fieldName }) => (
  <>
  { errors.filter(x => x["fieldName"] === fieldName).length !== 0 &&
  <ul className="p-4 mt-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
  {
    errors.filter(x => x["fieldName"] === fieldName).map(item => (<li key={item.message}>{item.message}</li>))
  }
  </ul>
  }
  </>
);

export default ListErrors;