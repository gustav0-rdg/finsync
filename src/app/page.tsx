"use client";

import { useState } from "react";

import Aside from "@/components/aside/Aside"
import HomePage from "@/pages/home/HomePage";
import History from "@/pages/history/History"

  

export default function Home(){
  const [page, setPage] = useState(1)

  function renderPage(){
    switch(page){
      case 1:
      default:
        return <HomePage />
      case 4:
        return <History />
      
    }
  }

  return (
    <main>
      <Aside changePage={setPage} />
      {renderPage()}
    </main>
  )
}