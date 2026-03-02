import React from 'react'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation';

const Dashboard = async () => {

 const session = await getSession()
if(!session?.user){
        return redirect("/sign-in");
    }

    
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard