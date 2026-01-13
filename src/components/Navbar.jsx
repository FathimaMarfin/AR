import { useState } from "react"
import { HiX, HiMenu } from "react-icons/hi"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("#home")

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#services", label: "Services" }
    ]

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
                <div className="container mx-auto flex items-center justify-between px-4  sm:px-6 lg:px-30 rg:px-30 h-16 md:h-20">

                    {/* Logo */}
                    <div className="cursor-pointer left-0 right-0">
                        <h1 className="font-bold text-3xl leading-none">AR</h1>
                        <h2 className="font-semibold text-xl">ENGINEERING</h2>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="block md:hidden text-black p-2"
                    >
                        {isMenuOpen ? (
                            <HiX className="w-7 h-7" />
                        ) : (
                            <HiMenu className="w-7 h-7" />
                        )}
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`pb-1 border-b-4 transition-all duration-200 ${
                                    activeLink === link.href
                                        ? "border-yellow-500 text-black"
                                        : "border-transparent text-gray-600"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Get a Quote Button */}
                        <a
                            href="#quote"
                            onClick={() => setActiveLink("#quote")}
                            className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-4xl hover:bg-yellow-400 transition-all"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t shadow-lg">
                        <div className="flex flex-col px-6 py-4 space-y-4">

                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.href)
                                        setIsMenuOpen(false)
                                    }}
                                    className={`pb-1 border-b-4 text-lg transition-all duration-200 ${
                                        activeLink === link.href
                                            ? "border-yellow-500 text-black"
                                            : "border-transparent text-gray-600"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Get a Quote Button Mobile */}
                            <a
                                href="#quote"
                                onClick={() => {
                                    setActiveLink("#quote")
                                    setIsMenuOpen(false)
                                }}
                                className="bg-yellow-500 text-black font-semibold px-5 py-3 rounded-4xl text-left w-35 "
                            >
                                Get a Quote
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
