const Navigation = () => {
    return (
    <ul aria-label="Global" className="flex items-center gap-6 text-sm">
        <li className="px-6 text-zinc-50 transition hover:text-gray-950"><a href="Detail.tsx">Quản lý đơn hàng</a></li>
        <li className="px-6 text-zinc-50 transition hover:text-gray-950"><a href="#">Mở bán vé</a></li>
        <li className="px-6 text-zinc-50 transition hover:text-gray-950"><a href="#">Trở thành đối tác</a></li>
    </ul>
    )
}

export default Navigation