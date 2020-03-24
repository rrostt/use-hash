import { useState, useEffect } from 'react'

const useHash = () => {
  const [hash, setHash] = useState('')

  const readAndSetHash = () => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setHash(window.location.hash.substr(1))
    }
  }

  useEffect(() => {
    readAndSetHash()
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', readAndSetHash, false)
      return () => window.removeEventListener('hashchange', readAndSetHash, false)
    }
  }, [])

  return hash
}

export { useHash }
export default useHash
