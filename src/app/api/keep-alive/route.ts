import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Force the route to be dynamic so it isn't cached by Next.js
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // A simple query to keep the Supabase connection active
    const { data, error } = await supabase.from('users').select('id').limit(1);
    
    // Even if the query errors (e.g., 'users' table doesn't exist), 
    // the network request to Supabase counts as activity and prevents pausing.
    if (error) {
       console.warn('Keep-alive ping returned an error (expected if table missing):', error.message);
    }
    
    return NextResponse.json({ 
      status: 'ok', 
      message: 'Database pinged successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to ping database' }, 
      { status: 500 }
    );
  }
}
