import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/test-db')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <h1>בדיקת חיבור</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>טוען...</p>
      )}
      <div className="flex items-center justify-center bg-gray-100 p-8">
  <div className="bg-white rounded-xl shadow-lg p-8">
    <h1 className="text-3xl font-bold text-purple-600">
      טיילווינד עובד! 🎉
    </h1>
   
  </div>
</div>
    </div>
  )
}

export default App