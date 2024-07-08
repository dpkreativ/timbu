import { CartIcon, HamburgerIcon, LogoAsSVG } from '@/assets/icons';

export default function Header() {
  return (
    <header>
      <div className="w-full max-w-5xl flex justify-between items-center gap-5">
        {/* Mobile Menu */}
        <div className="p-5">
          <button type="button">
            <HamburgerIcon />
          </button>
        </div>

        {/* Brand */}
        <div className="p-5">
          <LogoAsSVG />
        </div>

        {/* Cart and Profile */}
        <div className="p-5 flex gap-5 items-center">
          <button type="button">
            <CartIcon />
          </button>

          <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
