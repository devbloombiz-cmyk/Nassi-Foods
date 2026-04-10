// Mock Supabase client for testing without real backend
// TODO: Uncomment and configure real Supabase later
/*
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
*/

// Dummy Supabase mock
export const supabase = {
  auth: {
    getSession: () => Promise.resolve({ data: { session: null } }),  // Will be overridden by hook
    signInWithPassword: (credentials) => {
      // Simulate login delay
      return new Promise((resolve) => {
        setTimeout(() => {
          if (credentials.email === 'test@example.com' && credentials.password === '123456') {
            resolve({ data: { user: { id: 'dummy-1', email: credentials.email } }, error: null })
          } else {
            resolve({ data: null, error: { message: 'Invalid credentials' } })
          }
        }, 1000)
      })
    },
    signUp: (credentials) => {
      // Simulate register delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: { user: { id: 'dummy-1', email: credentials.email } }, error: null })
        }, 1000)
      })
    },
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: (callback) => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  from: (table) => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }),  // Mock for users
      }),
    }),
  }),
  channel: () => ({
    on: () => ({
      subscribe: () => ({}),
    }),
  }),
}

// Export for consistency
export const subscribeToUsers = (callback) => {
  // Mock realtime
  return { unsubscribe: () => {} }
}
