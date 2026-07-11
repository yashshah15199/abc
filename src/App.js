import React, { useEffect } from 'react'

function App() {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    fetch('https://cicddemo-1.onrender.com/health')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);
  return (
    <div>App

      API Health Check: {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  )
}

export default App