import { useQuery } from '@tanstack/react-query'
// import { supabase } from '../services/supabase'  // Not used now

export const useUserData = (userId) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      // Dummy user data (replace with real Supabase fetch later)
      if (!userId) throw new Error('No user ID')
      return {
        id: userId,
        name: 'John Doe',  // Dummy name
        email: 'john@example.com',  // Matches login email
        // Add more fields as needed (e.g., bio, progress)
      }
    },
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,  // Cache for 5 min
  })
}
