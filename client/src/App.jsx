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
    </div>
  )
}

export default App