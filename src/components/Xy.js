import React, { useState } from 'react';

export default function Xy() {
  return (
    <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
  )
}
