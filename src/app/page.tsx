"use client";

import { useState } from "react";

import Aside from "@/components/aside/Aside"
import HomePage from "@/pages/home/HomePage";
import History from "@/pages/history/History"
import Me from "@/pages/me/Me";
import Dashboard from "@/pages/dashboard/dashboard";
import Finances from "@/pages/finances/Finances";

export default function Home(){
  const [page, setPage] = useState(1)

  function renderPage(){
    switch(page){
      case 1:
      default:
        return <HomePage />
      case 2:
        return <Finances />
      case 3:
        return <Dashboard />
      case 4:
        return <History />
      case 5:
        return <Me />
    }
  }

  return (
    <main>
      <Aside changePage={setPage} />
      {renderPage()}
    </main>
  )
}