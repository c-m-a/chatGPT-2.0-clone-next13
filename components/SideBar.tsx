import NewChat from './NewChat'

export default function SideBar() {
  return <div className="p-2 flex flex-col h-screen">
    <div className="flex-1">
      <div>
        <NewChat />
        <div>
          { /* ModelSelection */ }
        </div>
         { /* Map through the chatRows */ }
      </div>
    </div>
  </div>
}

