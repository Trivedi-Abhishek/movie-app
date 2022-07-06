export default function HeaderIcon({Icon,title}) {
  return (
    <div className="flex mx-4 flex-col select-none cursor-pointer hover:text-white active:text-red-500 lg:mx-6">
        <Icon className="h-8"/>
        <p className="my-2">{title}</p>
    </div>
  )
}
