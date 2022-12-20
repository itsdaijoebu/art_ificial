export default function Nav() {
    return (
        <nav className="flex justify-between bg-primary text-primary-content">
            <span><span>Art</span>ificial</span>
            <div className="flex justify-around gap-4">
                <a href="#" className="btn">Home</a>
                <a href="#" className="btn">About</a>
                <a href="#" className="btn">Contact</a>
            </div>
        </nav>
    )    
}