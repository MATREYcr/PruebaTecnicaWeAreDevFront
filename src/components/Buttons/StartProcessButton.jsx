import React from 'react'

const StartProcessButton = ({ onClick }) => {
  return (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40"
        onClick={() => onClick()}
      >
        Empezar proceso
      </button>
  )
}

export default StartProcessButton
