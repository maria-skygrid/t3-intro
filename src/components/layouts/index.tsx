import type { PropsWithChildren } from "react"


const Layout = (props: PropsWithChildren) => {
  return (
    <main className="flex justify-center h-screen">
    <div className="border-x w-full md:max-w-2xl border-slate-700 h-full">
      {props.children}
    </div>
  </main>
  )
}

export default Layout