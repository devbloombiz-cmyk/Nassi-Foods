import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'  // Uses mock now

export const useAuth = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Load from localStorage on init
    const savedSession = localStorage.getItem('dreemz_session')
    if (savedSession) {
      setSession(JSON.parse(savedSession))
    }

    // Simulate auth state change (mock)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
      if (sess) {
        localStorage.setItem('dreemz_session', JSON.stringify(sess))
      } else {
        localStorage.removeItem('dreemz_session')
      }
    })

    return () => subscription?.unsubscribe?.()
  }, [])

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    setSession(data)  // Update local state
    return data
  }

  const register = async (email, password) => {
    // For register, we simulate creating a user but don't auto-login (redirect to login)
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    // Don't set session here; user must login after register
    return data
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setSession(null)
    localStorage.removeItem('dreemz_session')
    // Optional: Redirect to home (handle in components)
  }

  return { session, login, register, logout }
}
