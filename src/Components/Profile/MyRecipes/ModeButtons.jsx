import React from 'react'

const ModeButtons = ({ isEditing }) => {
  return isEditing ? (
    <div>
        <button>Save</button>
    </div>
  ) : (
    <div>
        <button>Delete</button>
        <button>Edit</button>
    </div>
  )
}

export default ModeButtons